// 旅行规划应用 - 主逻辑

// 全局变量
let currentDestination = null;
let currentItineraryFilter = 'all';

// 页面初始化
document.addEventListener('DOMContentLoaded', function() {
    // 检查URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const destinationId = urlParams.get('id');

    if (destinationId) {
        // 显示详情页
        const dest = destinations.find(d => d.id === parseInt(destinationId));
        if (dest) {
            showDetail(dest);
        } else {
            showHome();
        }
    } else {
        // 显示首页
        showHome();
    }

    // 监听滚动事件
    window.addEventListener('scroll', handleScroll);
});

// 显示首页
function showHome() {
    // 更新URL
    window.history.pushState({}, '', window.location.pathname);

    // 显示首页，隐藏详情页
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('detailPage').style.display = 'none';
    document.getElementById('backBtn').style.display = 'none';

    // 渲染目的地列表
    renderDestinations();

    // 滚动到顶部
    window.scrollTo(0, 0);
}

// 渲染目的地列表
function renderDestinations() {
    const grid = document.getElementById('destinationsGrid');

    // 按热度排序
    const sortedDestinations = [...destinations].sort((a, b) => b.popularityScore - a.popularityScore);

    grid.innerHTML = sortedDestinations.map(dest => `
        <article class="destination-card" onclick="showDetailById(${dest.id})">
            <div class="card-image-wrapper">
                <img class="card-image" src="${dest.coverImage}" alt="${dest.name}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22500%22 viewBox=%220 0 800 500%22%3E%3Crect fill=%22%23E0F2FE%22 width=%22800%22 height=%22500%22/%3E%3Ctext fill=%22%230EA5E9%22 font-size=%2240%22 x=%22400%22 y=%22250%22 text-anchor=%22middle%22 dy=%22.3em%22%3E${dest.name}%3C/text%3E%3C/svg%3E'">
                <div class="card-hot-badge">
                    <span>🔥</span>
                    <span>${dest.popularityScore}%</span>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">
                    ${dest.name}
                    <span class="card-title-en">${dest.englishName}</span>
                </h3>
                <p class="card-desc">${dest.description}</p>
                <div class="card-highlight">
                    ${dest.highlight.split('·').map(h => `<span class="highlight-tag">${h}</span>`).join('')}
                </div>
            </div>
        </article>
    `).join('');
}

// 通过ID显示详情页
function showDetailById(id) {
    const dest = destinations.find(d => d.id === id);
    if (dest) {
        showDetail(dest);
    }
}

// 显示详情页
function showDetail(dest) {
    currentDestination = dest;
    currentItineraryFilter = 'all';

    // 更新URL
    window.history.pushState({}, '', `?id=${dest.id}`);

    // 隐藏首页，显示详情页
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('detailPage').style.display = 'block';
    document.getElementById('backBtn').style.display = 'flex';

    // 渲染详情页内容
    renderDetailHeader(dest);
    renderTransport(dest);
    renderItineraries(dest);
    renderFood(dest);
    renderHotels(dest);

    // 滚动到顶部
    window.scrollTo(0, 0);
}

// 渲染详情页头部
function renderDetailHeader(dest) {
    document.getElementById('detailCover').src = dest.coverImage;
    document.getElementById('detailTitle').textContent = dest.name;
    document.getElementById('detailDesc').textContent = dest.description;
    document.getElementById('detailHighlight').innerHTML = dest.highlight.split('·').map(h =>
        `<span class="highlight-tag">${h}</span>`
    ).join('');
}

// 渲染交通信息
function renderTransport(dest) {
    const grid = document.getElementById('transportGrid');

    const transportIcons = {
        '飞机': '✈️',
        '高铁': '🚄',
        '自驾': '🚗',
        '大巴': '🚌'
    };

    grid.innerHTML = dest.transport.methods.map(method => `
        <div class="transport-card">
            <div class="transport-type">
                <span class="transport-icon">${transportIcons[method.type] || '🚐'}</span>
                <span>${method.type}</span>
            </div>
            <div class="transport-info">
                <p>
                    <span class="info-label">耗时</span>
                    <span class="info-value">${method.duration}</span>
                </p>
                <p>
                    <span class="info-label">费用</span>
                    <span class="info-value">${method.cost}</span>
                </p>
            </div>
            <div class="transport-pros-cons">
                <div class="pros-item">
                    <span>✓</span>
                    <span>${method.pros.join('、')}</span>
                </div>
                <div class="cons-item">
                    <span>✗</span>
                    <span>${method.cons.join('、')}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// 渲染游玩规划
function renderItineraries(dest) {
    const list = document.getElementById('itineraryList');
    const tabsContainer = document.querySelector('.itinerary-tabs');

    // 渲染标签页
    let tabsHTML = `<button class="itinerary-tab active" data-days="all">全部方案</button>`;
    dest.itineraries.forEach((it, index) => {
        tabsHTML += `<button class="itinerary-tab" data-days="${index}">${it.days}天${it.title}</button>`;
    });
    tabsContainer.innerHTML = tabsHTML;

    // 绑定标签页点击事件
    tabsContainer.querySelectorAll('.itinerary-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            tabsContainer.querySelectorAll('.itinerary-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentItineraryFilter = this.dataset.days;
            renderItineraryCards(dest);
        });
    });

    // 渲染游玩卡片
    renderItineraryCards(dest);
}

function renderItineraryCards(dest) {
    const list = document.getElementById('itineraryList');

    let itinerariesToShow = dest.itineraries;
    if (currentItineraryFilter !== 'all') {
        itinerariesToShow = [dest.itineraries[currentItineraryFilter]];
    }

    list.innerHTML = itinerariesToShow.map(it => `
        <div class="itinerary-card">
            <div class="itinerary-header">
                <div>
                    <div class="itinerary-days">${it.days}天${it.title}</div>
                    <div class="itinerary-best-for">适合：${it.bestFor}</div>
                </div>
            </div>
            <div class="itinerary-body">
                <div class="itinerary-highlights">
                    ${it.highlights.map(h => `<span class="itinerary-highlight-tag">${h}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// 渲染餐饮推荐
function renderFood(dest) {
    // 当地特色菜
    document.getElementById('localFood').innerHTML = dest.food.localSpecialties.map(food => `
        <li class="food-item">
            <div>
                <div class="food-name">${food.name}</div>
                <div class="food-reason">${food.reason}</div>
            </div>
            <div class="food-price">${food.price}</div>
        </li>
    `).join('');

    // 人气小吃
    document.getElementById('snacks').innerHTML = dest.food.popularSnacks.map(food => `
        <li class="food-item">
            <div>
                <div class="food-name">${food.name}</div>
                <div class="food-reason">${food.reason}</div>
            </div>
            <div class="food-price">${food.price}</div>
        </li>
    `).join('');

    // 高性价比餐厅
    document.getElementById('valueFood').innerHTML = dest.food.valueRestaurants.map(food => `
        <li class="food-item">
            <div>
                <div class="food-name">${food.name}</div>
                <div class="food-reason">${food.reason}</div>
            </div>
            <div class="food-price">${food.price}</div>
        </li>
    `).join('');
}

// 渲染酒店选择
function renderHotels(dest) {
    // 经济型
    document.getElementById('economyHotels').innerHTML = dest.hotels.economy.map(hotel => `
        <div class="hotel-item">
            <div class="hotel-name">${hotel.name}</div>
            <div class="hotel-location">📍 ${hotel.location}</div>
            <div class="hotel-price">${hotel.price}</div>
            <div class="hotel-features">
                <span class="hotel-feature">${hotel.advantage}</span>
                ${hotel.features ? hotel.features.map(f => `<span class="hotel-feature">${f}</span>`).join('') : ''}
            </div>
        </div>
    `).join('');

    // 中端
    document.getElementById('midHotels').innerHTML = dest.hotels.midRange.map(hotel => `
        <div class="hotel-item">
            <div class="hotel-name">${hotel.name}</div>
            <div class="hotel-location">📍 ${hotel.location}</div>
            <div class="hotel-price">${hotel.price}</div>
            <div class="hotel-features">
                <span class="hotel-feature">${hotel.advantage}</span>
                ${hotel.features ? hotel.features.map(f => `<span class="hotel-feature">${f}</span>`).join('') : ''}
            </div>
        </div>
    `).join('');

    // 高端
    document.getElementById('luxuryHotels').innerHTML = dest.hotels.luxury.map(hotel => `
        <div class="hotel-item">
            <div class="hotel-name">${hotel.name}</div>
            <div class="hotel-location">📍 ${hotel.location}</div>
            <div class="hotel-price">${hotel.price}</div>
            <div class="hotel-features">
                <span class="hotel-feature">${hotel.advantage}</span>
                ${hotel.features ? hotel.features.map(f => `<span class="hotel-feature">${f}</span>`).join('') : ''}
            </div>
        </div>
    `).join('');
}

// 滚动处理
function handleScroll() {
    const backToTop = document.getElementById('backToTop');

    // 显示/隐藏返回顶部按钮
    if (window.scrollY > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
}

// 返回顶部
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 浏览器返回按钮处理
window.addEventListener('popstate', function(e) {
    const urlParams = new URLSearchParams(window.location.search);
    const destinationId = urlParams.get('id');

    if (destinationId) {
        const dest = destinations.find(d => d.id === parseInt(destinationId));
        if (dest) {
            showDetail(dest);
        } else {
            showHome();
        }
    } else {
        showHome();
    }
});
