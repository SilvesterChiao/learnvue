// 面向对象
var person = new Object()
person.name = 'Nicholas'
person.age = 30
person.job = 'Software Engineer'
person.sayName = function () {
    console.log(this.name)
}

// 数据属性(configurable, enumerable, writable, value)
Object.defineProperty(person, 'sex', {
    configurable: false,
    enumerable: false,
    writable: false,
    value: '男'
})

// 访问器属性(configurable, enumerable, get, set)
Object.defineProperty(person, 'job', {
    get: function () {}
})

var descriptor = Object.getOwnPropertyDescriptor(person, 'sex')
console.log(descriptor)
