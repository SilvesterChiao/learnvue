/**
 * 3. 原型模式
 */
function Person () {}

// Person.prototype.name = 'Nicholas'
// Person.prototype.age = 29
// Person.prototype.job = 'Software Engineer'
// Person.prototype.sayName = function () {
//     console.log(this.name)
// }

Person.prototype = {
    // constructor: Person,
    name: 'Nicholas',
    age: 29,
    job: 'Software Engineer',
    sayName: function () {
        console.log(this.name)
    }
}

Object.defineProperty(Person.prototype, 'constructor', {
    enumerable: false,
    value: Person
})

export { Person }
