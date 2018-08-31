let Mock = require('mockjs')
let Random = Mock.Random

// 扩展方法
Random.extend({
    constellation: function (date) {
        var constellations = [
            '白羊座',
            '金牛座',
            '双子座',
            '巨蟹座',
            '狮子座',
            '处女座',
            '天秤座',
            '天蝎座',
            '射手座',
            '摩羯座',
            '水瓶座',
            '双鱼座'
        ]
        return this.pick(constellations)
    }
})

var template = {
    'user|10': [
        {
            'id|+1': 1,
            name: '@CNAME',
            constellation: '@CONSTELLATION'
        }
    ],
    'article|10': [
        {
            'id|+1': 1,
            title: '@CTITLE',
            author: '@PICK(@../../user)'
        }
    ]
}

var data = Mock.mock(template)

export { data }
