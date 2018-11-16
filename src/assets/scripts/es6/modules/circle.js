// 模块的整体加载
/**
 * 计算圆的面积
 * @param {number} radius 圆的半径
 * @return {number} 圆的面积
 */
export function area (radius) {
    return Math.PI * radius * radius
}

/**
 * 计算圆的周长
 * @param {number} radius 圆的半径
 * @return {number} 圆的周长
 */
export function circumference (radius) {
    return 2 * Math.PI * radius
}
