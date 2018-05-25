// 1 Array.from()
// 用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
}

var arr1 = [].slick.call(arrayLike)
let arr2 = Array.from(arrayLike)
console.log(arr1)
console.log(arr2)

Array.from('hello')
let namesSet = new Set(['a', 'b'])
Array.from(namesSet)

// 2 Array.of()
// 用于将一组值，转换为数组
Array.of(1, 1, 34)

// 3 数组实例的copyWithin()
// 复制数组中的一部分到制定位置，返回修改后的数组
;[1, 2, 3, 4, 5].copyWithin(0, 3)

// 4 数组实例的find()和findIndex()
// find方法用于找出第一个复合条件的数组成员
;[1, -2, 4, 28].find(n => n < 0)
;[1, -2, 4, 28].find(function (value, index, arr) {
  return value > 9
})

// 5 数组实例的fill()
// 使用给定值，填充一个数组
;['a', 'b', 'c'].fill(7)
new Array(3).fill(5)
;['a', 'b', 'c'].fill(7, 1, 2)

// 6 数组实例的entries(),keys()和values()

// 7 数组实例的includes()

// 8 数组的空位
