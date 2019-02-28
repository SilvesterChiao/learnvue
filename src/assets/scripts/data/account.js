// 支出类型
let outlayType = [
    {
        id: 0,
        text: '餐饮伙食'
    },
    {
        id: 1,
        text: '水果零食'
    },
    {
        id: 2,
        text: '生活日用'
    },
    {
        id: 3,
        text: '交通通信'
    },
    {
        id: 4,
        text: '交通通信'
    },
    {
        id: 5,
        text: '文教娱乐'
    },
    {
        id: 6,
        text: '住房缴费'
    },
    {
        id: 7,
        text: '其他支出'
    }
]

// 收入类型
let incomeType = [
    {
        id: 0,
        text: '工资'
    },
    {
        id: 1,
        text: '奖金'
    },
    {
        id: 2,
        text: '人情往来'
    },
    {
        id: 3,
        text: '其他收入'
    }
]

// 支付方式
let payType = [
    '现金',
    '银行卡',
    '微信余额',
    '支付宝余额',
    '支付宝花呗',
    '京东白条'
]

// 收款方式
let receiptType = ['现金', '银行卡', '微信余额', '支付宝余额']

// 支出列表
let outlayList = [
    {
        id: 0,
        date: '2019-02-11',
        amount: '19',
        outlayType: 0,
        payType: 1,
        summary: '晚餐'
    },
    {
        id: 1,
        date: '2019-02-11',
        amount: '4',
        outlayType: 2,
        payType: 0,
        summary: '洗衣皂'
    },
    {
        id: 2,
        date: '2019-02-12',
        amount: '2',
        outlayType: 0,
        payType: 1,
        summary: '早餐'
    },
    {
        id: 3,
        date: '2019-02-12',
        amount: '14',
        outlayType: 0,
        payType: 1,
        summary: '午餐'
    }
]

// 收入列表
let incomeList = [
    {
        id: 0,
        date: '2019-01-17',
        amount: '32000',
        incomeType: 0,
        receiptType: 1,
        summary: '18年12月工资'
    },
    {
        id: 1,
        date: '2019-01-17',
        amount: '23500',
        incomeType: 1,
        receiptType: 1,
        summary: '年终奖'
    },
    {
        id: 2,
        date: '2019-01-31',
        amount: '100',
        incomeType: 2,
        receiptType: 2,
        summary: '过年红包'
    },
    {
        id: 3,
        date: '2019-02-11',
        amount: '100',
        incomeType: 1,
        receiptType: 0,
        summary: '开工红包'
    }
]

export { outlayType, incomeType, payType, receiptType, outlayList, incomeList }
