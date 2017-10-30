import Mock from 'mockjs'

// var Random = Mock.Random

Mock.mock('/api/list', {  // 首页列表数据
  'sliderImg|3-4': [  // 轮播图
    {
      'src': 'http://image1.suning.cn/uimg/cms/img/150885774582734168.jpg',
      'id|+1': 0
    }
  ],
  'screens': [  // 筛选
    {
      'text': '全部',
      'id': 0
    },
    {
      'text': '上衣',
      'id': 1
    },
    {
      'text': '裤子',
      'id': 2
    },
    {
      'text': '裙子',
      'id': 3
    },
    {
      'text': '鞋子',
      'id': 4
    }
  ],
  'commodity|20-30': [
    {
      'src': 'https://s2.mogucdn.com/mlcdn/c45406/171019_45i2j10h7e27554a5hi1d942i63ll_640x960.jpg',
      'id|+1': 0
    }
  ]
})