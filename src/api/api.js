import Mock from 'mockjs'

var Random = Mock.Random

// 个人中心
Mock.mock('/api/my/collect', {
  'storeData|1-2': [    // 我收藏的店铺
    {
      'src': 'http://s3.mogucdn.com/b7/pic/151202/h6lqf_ifrdazrymm4toyjtguzdambqmeyde_320x320.jpg_100x100.jpg',
      'title': '公主女装店',
      'desc': '收藏：2503'
    },
    {
      'src': 'http://s3.mogucdn.com/p2/160811/14a828_29e2d6cf8dhaih3f8750a06k3703a_300x300.jpg',
      'title': '小美服装店',
      'desc': '收藏：1111'
    }
  ]
})
Mock.mock('/api/my/message', {  // 信息
  'message': [
    {
      'src': 'http://s3.mogucdn.com/b7/pic/151202/h6lqf_ifrdazrymm4toyjtguzdambqmeyde_320x320.jpg_100x100.jpg',
      'title': '公主女装店',
      'desc': '减价大促销啊',
      'time': '2017-11-7'
    },
    {
      'src': 'http://s3.mogucdn.com/p2/160811/14a828_29e2d6cf8dhaih3f8750a06k3703a_300x300.jpg',
      'title': '小美服装店',
      'desc': '这是一条消息提示',
      'time': '2017-11-9'
    }
  ]
})
Mock.mock('/api/my/friend', {  // 友圈
  'friend': [
    {
      'src': 'https://s3.mogucdn.com/mlcdn/5abf39/170507_88gb87b3aja9ei2jhfb8adebegeii_200x200.jpg_100x100.jpg',
      'title': '李师师',
      'desc': '等待支付',
      'store': 0,
      'time': '2017/11/8'
    },
    {
      'src': 'https://s3.mogucdn.com/mlcdn/5abf39/170623_03851i7dk4g8flf3ed08f8cjca59b_200x200.jpg_100x100.jpg',
      'title': '陈圆圆',
      'desc': '邀请成功',
      'store': 1,
      'time': '2017/11/9'
    },
    {
      'src': 'https://s3.mogucdn.com/b7/avatar/160126/16s406_ifrgcmbqgzsdonjvgyzdambqmeyde_392x376.jpg_100x100.jpg',
      'title': '柳如是',
      'desc': '邀请成功',
      'store': 1,
      'time': '2017/11/10'
    }
  ]
})
Mock.mock('/api/my/order', {  // 订单
  'all': [
    {
      'store': 0,   // 0 待发货
      'title': {
        'name': '魅力女人专卖店',
        'store': '等待发货'
      },
      'main': {
        'src': 'https://s11.mogucdn.com/mlcdn/c45406/170911_1bhbl49e9jkf85dk773gl0lfie2hh_640x960.jpg',
        'text': '韩国代购原版chic麻花圆领套头毛衣新款针织衫上衣女潮',
        'color': '杏色',
        'size': 'M',
        'num': 1,
        'money': 199,
        'oldmoney': 399
      }
    },
    {
      'store': 0,   // 0 待发货
      'title': {
        'name': '萱萱小姐',
        'store': '等待发货'
      },
      'main': {
        'src': 'https://s17.mogucdn.com/mlcdn/c45406/170710_5e69k942jaa4dc933e9a0bja225lg_640x960.jpg',
        'text': '新款直筒牛仔裤女毛边哈伦裤宽松显瘦阔腿九分裤',
        'color': '浅蓝',
        'size': 'L',
        'num': 1,
        'money': 69,
        'oldmoney': 129
      }
    },
    {
      'store': 1,   // 1 待收货
      'title': {
        'name': '小银子女装店',
        'store': '店内提货'
      },
      'main': {
        'src': 'https://s3.mogucdn.com/mlcdn/c45406/170915_8cl9k8236821g77fbj1118ac180cf_640x960.jpg',
        'text': '秋冬新款纯色毛呢外套呢子大衣+高领毛衣两件套时尚套装',
        'color': '黑色',
        'size': 'S',
        'num': 1,
        'money': 158,
        'oldmoney': 269
      }
    },
    {
      'store': 2,   // 2 待评论
      'title': {
        'name': '时尚啦啦家',
        'store': '交易成功'
      },
      'main': {
        'src': 'https://s17.mogucdn.com/mlcdn/c45406/170828_67aa534hk1hkjk9cfif69h6eg8b4g_640x960.jpg',
        'text': '秋装新款韩版学生紧身显瘦小脚裤子高腰牛仔裤女九分裤铅笔裤长裤',
        'color': '浅蓝',
        'size': '29',
        'num': 1,
        'money': 49,
        'oldmoney': 89
      }
    },
    {
      'store': 2,   // 2 待评论
      'title': {
        'name': 'MOMO末末家',
        'store': '交易成功'
      },
      'main': {
        'src': 'https://s3.mogucdn.com/mlcdn/c45406/171012_1fa46415328h2f4127f3a5f7bg658_640x960.jpg',
        'text': '冬季新品韩版中长款翻领百搭呢大衣外套+高领百搭毛衣连衣裙套装',
        'color': '粉色',
        'size': 'L',
        'num': 1,
        'money': 179,
        'oldmoney': 269
      }
    },
    {
      'store': 3,   // 3 售后
      'title': {
        'name': '时尚啦啦家',
        'store': '正在退货'
      },
      'main': {
        'src': 'https://s17.mogucdn.com/mlcdn/c45406/171017_4el2eh4h346hihj066181ke6l64if_640x960.jpg',
        'text': '【杭州 正版】冬季新品韩版呢大衣外套+毛衣+打底裤三件套装',
        'color': '灰色',
        'size': 'M',
        'num': 1,
        'money': 218,
        'oldmoney': 299
      }
    }
  ],
  'deliver': [
    {
      'store': 0,   // 0 待发货
      'title': {
        'name': '魅力女人专卖店',
        'store': '等待发货'
      },
      'main': {
        'src': 'https://s11.mogucdn.com/mlcdn/c45406/170911_1bhbl49e9jkf85dk773gl0lfie2hh_640x960.jpg',
        'text': '韩国代购原版chic麻花圆领套头毛衣新款针织衫上衣女潮',
        'color': '杏色',
        'size': 'M',
        'num': 1,
        'money': 199,
        'oldmoney': 399
      }
    },
    {
      'store': 0,   // 0 待发货
      'title': {
        'name': '萱萱小姐',
        'store': '等待发货'
      },
      'main': {
        'src': 'https://s17.mogucdn.com/mlcdn/c45406/170710_5e69k942jaa4dc933e9a0bja225lg_640x960.jpg',
        'text': '新款直筒牛仔裤女毛边哈伦裤宽松显瘦阔腿九分裤',
        'color': '浅蓝',
        'size': 'L',
        'num': 1,
        'money': 69,
        'oldmoney': 129
      }
    }
  ],
  'take': [
    {
      'store': 1,   // 1 待收货
      'title': {
        'name': '小银子女装店',
        'store': '店内提货'
      },
      'main': {
        'src': 'https://s3.mogucdn.com/mlcdn/c45406/170915_8cl9k8236821g77fbj1118ac180cf_640x960.jpg',
        'text': '秋冬新款纯色毛呢外套呢子大衣+高领毛衣两件套时尚套装',
        'color': '黑色',
        'size': 'S',
        'num': 1,
        'money': 158,
        'oldmoney': 269
      }
    }
  ],
  'remain': [
    {
      'store': 2,   // 2 待评论
      'title': {
        'name': '时尚啦啦家',
        'store': '交易成功'
      },
      'main': {
        'src': 'https://s17.mogucdn.com/mlcdn/c45406/170828_67aa534hk1hkjk9cfif69h6eg8b4g_640x960.jpg',
        'text': '秋装新款韩版学生紧身显瘦小脚裤子高腰牛仔裤女九分裤铅笔裤长裤',
        'color': '浅蓝',
        'size': '29',
        'num': 1,
        'money': 49,
        'oldmoney': 89
      }
    },
    {
      'store': 2,   // 2 待评论
      'title': {
        'name': 'MOMO末末家',
        'store': '交易成功'
      },
      'main': {
        'src': 'https://s3.mogucdn.com/mlcdn/c45406/171012_1fa46415328h2f4127f3a5f7bg658_640x960.jpg',
        'text': '冬季新品韩版中长款翻领百搭呢大衣外套+高领百搭毛衣连衣裙套装',
        'color': '粉色',
        'size': 'L',
        'num': 1,
        'money': 179,
        'oldmoney': 269
      }
    }
  ],
  'after': [
    {
      'store': 3,   // 3 售后
      'title': {
        'name': '时尚啦啦家',
        'store': '正在退货'
      },
      'main': {
        'src': 'https://s17.mogucdn.com/mlcdn/c45406/171017_4el2eh4h346hihj066181ke6l64if_640x960.jpg',
        'text': '【杭州 正版】冬季新品韩版呢大衣外套+毛衣+打底裤三件套装',
        'color': '灰色',
        'size': 'M',
        'num': 1,
        'money': 218,
        'oldmoney': 299
      }
    }
  ]
})

Mock.mock('/api/msg', { // 客服消息
  'msg': [
    {
      'who': 0,   // 0 代表对方，1代表我
      'src': require('../common/img/user-2.jpg'),
      'context': '你好，请问有什么可以帮助您的？'
    }
  ],
  'msgLeft|1': [
    {
      'who': 0,
      'src': require('../common/img/user-2.jpg'),
      'context': '@word'
    }
  ]
})
