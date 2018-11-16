// import
/**
 * @author SilvesterChiao
 * @param   参数
 * @example 示例
 * @namespace   命名空间
 * @requires    依赖
 * @return  返回值
 * @version
 */
// 写法1
import { firstName, lastName, year } from './export.js'

/**
 * 函数功能
 * @param 参数
 * @return 返回值
 */
function setName (element) {
    element.textContent = firstName + ' ' + lastName
}

import * as circle from './circle.js'
