export default function (name, color) {
    // 私有属性
    var type = '泰迪'

    // 私有方法
    function eat () {
        console.log('狗吃骨头')
    }

    // 公有属性
    this.name = name
    this.color = color

    // 特权方法
    this.sayName = function () {
        console.log(this.name)
    }
}
