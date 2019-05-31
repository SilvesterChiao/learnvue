/**
 * 2. 构造函数模式
 * @param {*} name
 * @param {*} age
 * @param {*} job
 */
export function Person (name, age, job) {
    this.name = name
    this.age = age
    this.job = job
    this.sayName = function () {
        console.log(this.name)
    }
}
