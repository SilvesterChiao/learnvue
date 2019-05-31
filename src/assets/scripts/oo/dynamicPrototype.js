// 5. 动态原型模式
function Person (name, age, job) {
    // 属性
    this.name = name
    this.age = age
    this.job = job

    // 方法
    if (typeof this.sayName !== 'function') {
        Person.prototype.sayName = function () {
            console.log(this.name)
        }
    }
}

export { Person }
