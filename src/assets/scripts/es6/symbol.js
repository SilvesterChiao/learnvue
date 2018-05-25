// 新原始数据类型 Symbol
let s1 = Symbol('foo')
let s2 = Symbol('bar')

s1
s2
s1.toString()
s2.toString()

console.log(typeof s1)
console.log(s1)

// 作为属性名的Symbol
var mySymbol = Symbol()
// 1
var a = {}
a[mySymbol] = 'Hello'

// 2
var b = {
  [mySymbol]: 'Hello'
}

// 3
var c = {}
Object.defineProperty(c, mySymbol, { value: 'Hello!' })

var s3 = Symbol.for('bar')
var s4 = Symbol.for('bar')

console.log(s3 === s2)
console.log(s3 === s4)
