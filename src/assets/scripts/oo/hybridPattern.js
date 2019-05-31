/**
 * 4. 组合模式(构造函数+原型)
 * 构造函数: 实例属性
 * 原型: 方法和共享属性
 * @param {*} name
 * @param {*} age
 * @param {*} job
 */
function Person (name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    this.friends = ['Shelby', 'Court']
}

Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name)
    }
}
