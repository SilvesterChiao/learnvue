/*
 * title: let, const
 * date: 2017/12/07
 * author: Silvester
 */

// es6声明变量: var, function, let, const, import, class
// let
// let块级作用域

// const
// const声明常量，不允许改变

// 变量声明
// 1 let
let a = 10
var b = 1

console.log('a : ' + a)
console.log('b : ' + b)

var total = 0
for (let i = 0; i < 10; i++) {
    total += i
}

console.log('0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = ' + total)

// 2 const,声明常量
const PI = 3.14159
let r = 4
let e = PI * r * r
console.log('半径为4的圆的面积为：' + e)

const foo = {}
foo.prop = 123
foo.prop
console.log(foo)

const array = []
array.push('Hello')
array.length = 0
console.log(array)

// 冻结对象
const baz = Object.freeze({})
baz.prop = 123
console.log(baz)
