/**
 * Set
 */

// 1.1 基本用法
// ES6提供了新的数据结构Set，类似数组，成员值唯一
const numbers = new Set()
;[2, 3, 5, 4, 2, 2].forEach(x => numbers.add(x))
for (let i of numbers) {
  console.log(i)
}

const set = new Set([1, 2, 3, 4, 5])
;[...set]

const items = new Set([1, 2, 3, 4, 5, 5, 5, 5])
console.log(items.size)

function divs () {
  return [...document.querySelectorAll('div')]
}

var set2 = new Set(divs())
console.log(set2.size)

divs().forEach(div => set.add(div))

// 属性
// Set.prototype.constructor
// Set.prototype.size
// 方法
// add
// delete
// has
// clear

var array = Array.from(items)

// 数组去重
function dedupe (array) {
  return Array.from(new Set(array))
}

// 遍历操作
// keys,values,entries,forEach
let colors = new Set(['red', 'green', 'blue'])
for (let color of colors.keys()) {
  console.log(color)
}

// 2 WeakSet
// 3 Map
// 4 WeakMap
