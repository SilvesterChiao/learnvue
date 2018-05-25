/*
 * title: 解构赋值
 * date: 2017/12/07
 * author: Silvester
*/

// destructuring(解构赋值)
// 1.数组
// 匹配模式
{
  let [a, b, c] = [1, 2, 3]
  let [foo, [[bar], baz]] = [1, [[2], 3]]
  let [, , third] = ['foo', 'bar', 'baz']
  let [d, , e] = [1, 2, 3]
  let [head, ...tail] = [1, 2, 3, 4, 5]
  let [x, y, ...z] = ['a']
}

// 不完全解构
{
  let [x, y] = [1, 2, 3]
  let [a, [b], d] = [1, [2, 3], 4]
  let [e, f, g] = new Set(['a', 'b', 'c'])
}

// 默认值
{
  let [d = true] = []
}

// 2.对象
{
  let { foo, bar } = { foo: 'aa', bar: 'bb' }
}

// 变量的解构赋值
// 1 数组的解构赋值
// 1.1 基本用法
// ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值
let a = 1
let b = 2
let c = 3

let [a, b, c] = [1, 2, 3]
let [foo, [[bar], baz]] = [, [[2], 3]]
let [, , third] = ['foo', 'bar', 'baz']
let [x, , y] = [1, 2, 3]
let [head, ...tail] = [1, 2, 3, 4]
let [i, j, ...k] = ['a']

// 2 对象的解构赋值
// 3 字符串的解构赋值
// 4 数值和布尔值的解构赋值
// 5 函数参数的解构赋值
// 6 圆括号问题
// 7 用途
