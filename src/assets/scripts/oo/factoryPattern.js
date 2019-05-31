/**
 * 1. 工厂模式
 * 有点: 解决了创建多个相似对象的问题
 * 缺点: 无法识别对象的类型
 * @param {*} name
 * @param {*} age
 * @param {*} job
 */
export function createPerson (name, age, job) {
    var o = new Object()
    o.name = name
    o.age = age
    o.job = job
    o.sayName = function () {
        console.log(this.name)
    }

    return o
}
