// 旅行目的地数据 - 从成都出发
const destinations = [
  {
    id: 1,
    name: "大理古城",
    englishName: "Dali Ancient City",
    season: "春季",
    popularityScore: 98,
    coverImage: "images/dali-ancient-city-yunnan-china-travel-scenery.jpg",
    description: "风花雪月的大理，苍山洱海的浪漫",
    highlight: "古城漫步 · 洱海骑行 · 苍山索道",
    transport: {
      from: "成都",
      methods: [
        {
          type: "飞机",
          duration: "约1.5小时",
          cost: "¥600-1200",
          pros: ["速度快", "舒适度高"],
          cons: ["需提前购票", "旺季价格波动大"]
        },
        {
          type: "高铁",
          duration: "约6-7小时",
          cost: "¥300-400",
          pros: ["价格稳定", "风景优美", "可欣赏沿途风光"],
          cons: ["耗时较长", "座位较拥挤"]
        },
        {
          type: "自驾",
          duration: "约8-9小时",
          cost: "¥500-700(油费+过路费)",
          pros: ["自由度高", "沿途可随时停车拍照"],
          cons: ["驾驶疲劳", "山路较多"]
        },
        {
          type: "大巴",
          duration: "约10-12小时",
          cost: "¥200-300",
          pros: ["价格最低", "可欣赏沿途风景"],
          cons: ["耗时最长", "舒适度较低"]
        }
      ]
    },
    itineraries: [
      {
        days: 2,
        title: "短途精华游",
        highlights: ["大理古城漫步", "洱海西岸骑行", "三塔寺祈福"],
        bestFor: "周末短途旅行者"
      },
      {
        days: 4,
        title: "常规深度游",
        highlights: ["苍山索道登顶", "双廊古镇探访", "洱海东岸自驾", "喜洲古镇体验"],
        bestFor: "休闲度假游客"
      },
      {
        days: 7,
        title: "全景深度游",
        highlights: ["环洱海全程", "沙溪古镇", "巍山古城", "苍山徒步", "当地民宿体验"],
        bestFor: "摄影爱好者和深度游玩家"
      }
    ],
    food: {
      localSpecialties: [
        { name: "破酥鱼", price: "¥60-80", reason: "大理特色名菜，外酥里嫩" },
        { name: "酸辣鱼", price: "¥50-70", reason: "洱海鱼为主料，酸辣可口" },
        { name: "乳扇", price: "¥15-25", reason: "大理特色小吃，奶香浓郁" },
        { name: "凉鸡米线", price: "¥15-20", reason: "古城必吃，清爽开胃" },
        { name: "雕梅扣肉", price: "¥40-60", reason: "大理传统名菜，酸甜可口" }
      ],
      popularSnacks: [
        { name: "烤乳扇", price: "¥10-15", reason: "街头人气小吃" },
        { name: "鲜花饼", price: "¥3-8/个", reason: "现烤花香浓郁" },
        { name: "漾濞卷粉", price: "¥10-15", reason: "爽滑可口" },
        { name: "饵块", price: "¥5-10", reason: "云南特色" }
      ],
      valueRestaurants: [
        { name: "益常根私房菜", price: "¥40-60", reason: "本地人常去，性价比高" },
        { name: "古城的壹餐厅", price: "¥50-70", reason: "口碑好，味道正宗" },
        { name: "小段厨房", price: "¥40-50", reason: "经济实惠" },
        { name: "清宏私房菜", price: "¥60-80", reason: "环境幽静" }
      ]
    },
    hotels: {
      economy: [
        { name: "大理古城青年旅舍", price: "¥50-80", location: "大理古城内", advantage: "经济实惠", features: ["多人间", "公共卫生间"] },
        { name: "云上时光客栈", price: "¥80-120", location: "古城南门附近", advantage: "位置便利", features: ["含早", "免费WiFi"] },
        { name: "苍山脚下民宿", price: "¥100-150", location: "苍山门附近", advantage: "安静舒适", features: ["庭院", "观景"] }
      ],
      midRange: [
        { name: "大理古城希尔顿欢朋", price: "¥300-500", location: "古城核心区", advantage: "品牌保障", features: ["健身房", "会议室", "停车场"] },
        { name: "洱海天域酒店", price: "¥400-600", location: "洱海西岸", advantage: "海景房", features: ["湖景", "泳池", "下午茶"] },
        { name: "双廊海景客栈", price: "¥350-550", location: "双廊古镇", advantage: "零距离洱海", features: ["海景露台", "摄影最佳"] }
      ],
      luxury: [
        { name: "大理海纳尔云墅", price: "¥1200-2000", location: "苍山高尔夫球场旁", advantage: "顶级奢华", features: ["独栋别墅", "无边泳池", "管家服务"] },
        { name: "大理古城英迪格", price: "¥800-1500", location: "古城复兴路", advantage: "设计感强", features: ["精品酒店", "特色餐厅", "艺术空间"] },
        { name: "明月松间洱海酒店", price: "¥1500-2500", location: "双廊景区", advantage: "禅意生活", features: ["冥想空间", "素食餐厅", "洱海最佳观景点"] }
      ]
    }
  },
  {
    id: 2,
    name: "丽江古城",
    englishName: "Lijiang Ancient City",
    season: "春季",
    popularityScore: 95,
    coverImage: "images/lijiang-ancient-town-yunnan-china-travel-scenery.jpg",
    description: "纳西古韵，小桥流水的柔软时光",
    highlight: "古城夜景 · 玉龙雪山 · 泸沽湖",
    transport: {
      from: "成都",
      methods: [
        {
          type: "飞机",
          duration: "约1.5小时",
          cost: "¥500-1000",
          pros: ["快捷便利", "直飞航班多"],
          cons: ["旺季价高", "需提前预订"]
        },
        {
          type: "高铁",
          duration: "约3-4小时",
          cost: "¥230-300",
          pros: ["性价比高", "舒适度好"],
          cons: ["班次较少"]
        },
        {
          type: "自驾",
          duration: "约7-8小时",
          cost: "¥500-600",
          pros: ["灵活自由"],
          cons: ["山路弯道多", "驾驶疲劳"]
        },
        {
          type: "大巴",
          duration: "约8-10小时",
          cost: "¥180-250",
          pros: ["价格实惠"],
          cons: ["耗时较长"]
        }
      ]
    },
    itineraries: [
      {
        days: 2,
        title: "古城休闲游",
        highlights: ["丽江古城漫步", "四方街夜景", "束河古镇"],
        bestFor: "周末游客"
      },
      {
        days: 4,
        title: "雪山深度游",
        highlights: ["玉龙雪山索道", "蓝月谷", "泸沽湖环湖", "印象丽江演出"],
        bestFor: "经典线路游"
      },
      {
        days: 7,
        title: "全景探秘游",
        highlights: ["老君山徒步", "泸沽湖深度", "香格里拉串联", "纳西文化体验"],
        bestFor: "深度探索者"
      }
    ],
    food: {
      localSpecialties: [
        { name: "纳西烤鱼", price: "¥50-70", reason: "纳西特色必尝" },
        { name: "鸡豆凉粉", price: "¥15-25", reason: "丽江传统小吃" },
        { name: "米灌肠", price: "¥20-30", reason: "纳西传统美食" },
        { name: "丽江腊排骨", price: "¥60-80", reason: "特色火锅" },
        { name: "黑山羊火锅", price: "¥70-100", reason: "当地特色" }
      ],
      popularSnacks: [
        { name: "鲜花饼", price: "¥3-8/个", reason: "现烤花香" },
        { name: "酸奶酪", price: "¥15-20", reason: "古城特色" },
        { name: "烤土豆", price: "¥5-10", reason: "街头常见" }
      ],
      valueRestaurants: [
        { name: "老妈的厨房", price: "¥40-60", reason: "本地人推荐" },
        { name: "阿妈意纳西饮食", price: "¥50-70", reason: "正宗纳西菜" },
        { name: "和叔食府", price: "¥45-65", reason: "性价比高" }
      ]
    },
    hotels: {
      economy: [
        { name: "丽江老城青年旅舍", price: "¥40-70", location: "古城边缘", advantage: "便宜", features: ["多人间"] },
        { name: "束河古镇客栈", price: "¥80-120", location: "束河", advantage: "安静", features: ["庭院"] }
      ],
      midRange: [
        { name: "丽江和府洲际", price: "¥600-900", location: "古城内", advantage: "位置绝佳", features: ["泳池", "健身房"] },
        { name: "丽江古城希尔顿", price: "¥500-800", location: "古城南门", advantage: "品牌服务", features: ["餐厅", "停车场"] }
      ],
      luxury: [
        { name: "丽江大研安缦", price: "¥2000-3500", location: "狮子山", advantage: "顶级度假", features: ["别墅", "SPA", "管家"] },
        { name: "丽江悦榕庄", price: "¥1800-3000", location: "束河", advantage: "纳西风格", features: ["独栋", "泳池"] }
      ]
    }
  },
  {
    id: 3,
    name: "西昌邛海",
    englishName: "Xichang Qionghai",
    season: "春季",
    popularityScore: 92,
    coverImage: "images/xichang-qionghai-lake-sichuan-china-panorama.jpg",
    description: "川西明珠，阳光花城的浪漫湖景",
    highlight: "邛海湿地 · 泸山登高 · 阳光康养",
    transport: {
      from: "成都",
      methods: [
        {
          type: "飞机",
          duration: "约1小时",
          cost: "¥300-600",
          pros: ["最快", "舒适"],
          cons: ["航班较少"]
        },
        {
          type: "高铁",
          duration: "约3小时",
          cost: "¥150-200",
          pros: ["班次多", "准时"],
          cons: ["需提前购票"]
        },
        {
          type: "自驾",
          duration: "约4-5小时",
          cost: "¥300-400",
          pros: ["自由灵活"],
          cons: ["高速费用"]
        },
        {
          type: "大巴",
          duration: "约5-6小时",
          cost: "¥120-150",
          pros: ["价格低"],
          cons: ["舒适度一般"]
        }
      ]
    },
    itineraries: [
      {
        days: 2,
        title: "周末度假",
        highlights: ["邛海环湖", "泸山登山", "月色小镇"],
        bestFor: "周末短途"
      },
      {
        days: 4,
        title: "康养休闲",
        highlights: ["湿地公园", "阳光康养", "美食之旅", "螺髻山"],
        bestFor: "休闲度假"
      }
    ],
    food: {
      localSpecialties: [
        { name: "邛海醉虾", price: "¥60-80", reason: "特色河鲜" },
        { name: "西昌火盆烧烤", price: "¥70-100", reason: "当地特色" },
        { name: "荞麦饼", price: "¥15-25", reason: "特色主食" },
        { name: "坨坨肉", price: "¥50-70", reason: "彝族特色" }
      ],
      popularSnacks: [
        { name: "凉山汉堡", price: "¥10-15", reason: "特色街头" },
        { name: "会理鸡火丝", price: "¥20-30", reason: "地方名吃" }
      ],
      valueRestaurants: [
        { name: "老约家特色菜", price: "¥40-60", reason: "口碑老店" },
        { name: "邛海鱼馆", price: "¥50-70", reason: "河鲜新鲜" }
      ]
    },
    hotels: {
      economy: [
        { name: "邛海青年旅舍", price: "¥50-80", location: "邛海附近", advantage: "实惠" },
        { name: "西昌市区经济酒店", price: "¥100-150", location: "市区", advantage: "便利" }
      ],
      midRange: [
        { name: "邛海宾馆", price: "¥300-450", location: "邛海湖畔", advantage: "湖景", features: ["停车场"] },
        { name: "西昌邛海湿地酒店", price: "¥350-500", location: "湿地公园旁", advantage: "环境好" }
      ],
      luxury: [
        { name: "西昌邛海悦榕酒店", price: "¥1200-1800", location: "邛海东岸", advantage: "顶级度假", features: ["SPA", "私人沙滩"] }
      ]
    }
  },
  {
    id: 4,
    name: "九寨沟",
    englishName: "Jiuzhaigou",
    season: "秋季",
    popularityScore: 97,
    coverImage: "images/jiuzhaigou-colorful-lake-sichuan-china.jpg",
    description: "人间仙境，童话世界的五彩池",
    highlight: "五花海 · 镜海 · 诺日朗瀑布",
    transport: {
      from: "成都",
      methods: [
        {
          type: "飞机",
          duration: "约1小时",
          cost: "¥400-800",
          pros: ["最快捷", "直飞九寨沟"],
          cons: ["航班少", "价格波动大"]
        },
        {
          type: "高铁",
          duration: "约2小时到镇江关",
          cost: "¥130-180",
          pros: ["价格稳定", "班次较多"],
          cons: ["需换乘大巴"]
        },
        {
          type: "自驾",
          duration: "约8-9小时",
          cost: "¥400-500",
          pros: ["沿途风景好", "灵活"],
          cons: ["山路险峻", "驾驶累"]
        },
        {
          type: "大巴",
          duration: "约10-12小时",
          cost: "¥150-200",
          pros: ["价格最低"],
          cons: ["耗时最长"]
        }
      ]
    },
    itineraries: [
      {
        days: 2,
        title: "精华速游",
        highlights: ["五花海", "镜海", "诺日朗", "五彩池"],
        bestFor: "时间有限"
      },
      {
        days: 4,
        title: "深度全景",
        highlights: ["日则沟", "则查洼沟", "树正沟", "黄龙串联"],
        bestFor: "摄影爱好者"
      }
    ],
    food: {
      localSpecialties: [
        { name: "牦牛肉", price: "¥80-120", reason: "高原特色" },
        { name: "藏香猪", price: "¥60-100", reason: "特色肉类" },
        { name: "青稞饼", price: "¥15-25", reason: "藏区主食" },
        { name: "酥油茶", price: "¥10-20", reason: "特色饮品" }
      ],
      popularSnacks: [
        { name: "酸奶", price: "¥10-15", reason: "高原酸奶" },
        { name: "风干肉", price: "¥30-50", reason: "便于携带" }
      ],
      valueRestaurants: [
        { name: "沟口家常菜", price: "¥40-60", reason: "实惠" },
        { name: "藏家乐", price: "¥50-80", reason: "体验特色" }
      ]
    },
    hotels: {
      economy: [
        { name: "九寨沟青年旅舍", price: "¥60-100", location: "沟口", advantage: "便宜", features: ["经济"] },
        { name: "沟口招待所", price: "¥80-120", location: "景区入口", advantage: "位置好"]
      ],
      midRange: [
        { name: "九寨沟天源豪生", price: "¥500-700", location: "沟口", advantage: "品牌", features: ["含早", "温泉"] },
        { name: "九寨度假酒店", price: "¥450-650", location: "漳扎镇", advantage: "舒适" }
      ],
      luxury: [
        { name: "九寨沟丽思卡尔顿", price: "¥2000-3500", location: "景区内", advantage: "极致奢华", features: ["别墅", "管家"] },
        { name: "九寨沟悦榕庄", price: "¥1800-2800", location: "漳扎镇", advantage: "高端度假" }
      ]
    }
  },
  {
    id: 5,
    name: "稻城亚丁",
    englishName: "Daocheng Yading",
    season: "秋季",
    popularityScore: 94,
    coverImage: "images/daocheng-yading-sichuan-alpine-lake-mountains.jpg",
    description: "蓝色星球上最后一片净土",
    highlight: "牛奶海 · 五色海 · 冲古寺",
    transport: {
      from: "成都",
      methods: [
        {
          type: "飞机",
          duration: "约1.5小时",
          cost: "¥500-1000",
          pros: ["快捷", "节省体力"],
          cons: ["易高反", "价格高"]
        },
        {
          type: "大巴/自驾",
          duration: "约15-18小时",
          cost: "¥300-500",
          pros: ["适应高反", "风景在路上"],
          cons: ["非常耗时", "驾驶辛苦"]
        }
      ]
    },
    itineraries: [
      {
        days: 3,
        title: "高原油菜游",
        highlights: ["稻城白塔", "冲古寺", "珍珠海"],
        bestFor: "初次高反"
      },
      {
        days: 5,
        title: "经典挑战",
        highlights: ["牛奶海", "五色海", "洛绒牛场", "稻城古镇"],
        bestFor: "体力充沛者"
      }
    ],
    food: {
      localSpecialties: [
        { name: "藏香鸡", price: "¥100-150", reason: "高原特色" },
        { name: "酥油茶", price: "¥15-25", reason: "必尝" },
        { name: "青稞面", price: "¥20-30", reason: "主食" }
      ],
      popularSnacks: [
        { name: "牦牛干巴", price: "¥30-50", reason: "便于携带" }
      ],
      valueRestaurants: [
        { name: "稻城老鸭家常菜", price: "¥40-60", reason: "实惠" }
      ]
    },
    hotels: {
      economy: [
        { name: "稻城青年旅舍", price: "¥50-80", location: "稻城镇", advantage: "便宜" },
        { name: "亚丁村客栈", price: "¥80-120", location: "亚丁村", advantage: "景区内" }
      ],
      midRange: [
        { name: "稻城亚丁温泉酒店", price: "¥400-600", location: "稻城镇", advantage: "含温泉", features: ["养生"] },
        { name: "亚丁湾酒店", price: "¥450-650", location: "景区入口", advantage: "舒适" }
      ],
      luxury: [
        { name: "稻城亚丁丽思卡尔顿", price: "¥2500-4000", location: "亚丁村", advantage: "顶级", features: ["氧气", "管家"] }
      ]
    }
  },
  {
    id: 6,
    name: "桂林阳朔",
    englishName: "Guilin Yangshuo",
    season: "春季",
    popularityScore: 90,
    coverImage: "images/guilin-yangshuo-karst-mountains-sunset-reflection.jpg",
    description: "山水甲天下，泛舟漓江的诗意生活",
    highlight: "漓江竹筏 · 西街夜景 · 十里画廊",
    transport: {
      from: "成都",
      methods: [
        {
          type: "飞机",
          duration: "约2小时",
          cost: "¥500-900",
          pros: ["快捷", "直飞桂林"],
          cons: ["旺季价高"]
        },
        {
          type: "高铁",
          duration: "约6-7小时",
          cost: "¥350-450",
          pros: ["舒适稳定"],
          cons: ["耗时较长"]
        },
        {
          type: "自驾",
          duration: "约12-14小时",
          cost: "¥800-1000",
          pros: ["完全自由"],
          cons: ["非常疲劳"]
        }
      ]
    },
    itineraries: [
      {
        days: 3,
        title: "山水精华",
        highlights: ["漓江竹筏", "象鼻山", "两江四湖", "西街"],
        bestFor: "休闲游"
      },
      {
        days: 5,
        title: "深度漫游",
        highlights: ["十里画廊", "遇龙河", "龙脊梯田", "阳朔西街"],
        bestFor: "深度体验"
      }
    ],
    food: {
      localSpecialties: [
        { name: "桂林米粉", price: "¥10-20", reason: "必吃经典" },
        { name: "啤酒鱼", price: "¥60-80", reason: "阳朔特色" },
        { name: "田螺酿", price: "¥40-60", reason: "地方特色" }
      ],
      popularSnacks: [
        { name: "桂花糕", price: "¥10-15", reason: "特色小吃" }
      ],
      valueRestaurants: [
        { name: "老友粉店", price: "¥15-25", reason: "地道实惠" },
        { name: "大师傅啤酒鱼", price: "¥60-80", reason: "口碑店" }
      ]
    },
    hotels: {
      economy: [
        { name: "阳朔青年旅舍", price: "¥40-70", location: "西街附近", advantage: "便宜", features: ["经济"] },
        { name: "阳朔小毛驴客栈", price: "¥80-120", location: "阳朔西街", advantage: "位置好" }
      ],
      midRange: [
        { name: "阳朔糖舍度假酒店", price: "¥600-900", location: "漓江边", advantage: "设计感", features: ["泳池", "下午茶"] },
        { name: "阳朔香格里拉", price: "¥500-700", location: "阳朔县城", advantage: "品牌" }
      ],
      luxury: [
        { name: "阳朔悦榕庄", price: "¥1800-2800", location: "漓江沿岸", advantage: "顶级度假", features: ["别墅", "SPA"] },
        { name: "桂林香格里拉", price: "¥1200-1800", location: "桂林市区", advantage: "豪华" }
      ]
    }
  }
];

// 导出数据供主程序使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = destinations;
}
