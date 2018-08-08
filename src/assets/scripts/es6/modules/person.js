// 写法一
export var firstName = 'Michael'
export var lastName = 'Jackson'
export var year = 1958

// 写法二
var length = 20
var width = 15
var height = 10

export { length, width, height }

// export一个方法
export function multiply (x, y) {
    return x * y
}

// 重命名
function v1 () {}
function v2 () {}

export { v1 as streamV1, v2 as streamV2, v2 as streamLatestVersion }

export default function () {
    console.log('default')
}
