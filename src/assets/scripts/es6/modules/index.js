// import
// 写法一
import {
    firstName,
    lastName,
    year,
    length as l,
    width as w,
    height as h
} from './person.js'

let person = {
    firstName,
    lastName,
    year
}
export { person }

// 写法二
export var volume = l * w * h
