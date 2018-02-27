// 1 属性的简洁表示法

var foo = 'bar';
var baz = {foo};
console.log(baz);

function f(x, y){
	return {x, y};
}
console.log(f(1, 2));

var o = {
	method(){
		return 'hello';
	}
}

var birth = '2000/01/01';
var Persion = {
	name: '张三',
	birth,
	hello(){
		console.log('我的名字是', this.name);
	}
}

// 这种写法用于函数的返回值将会非常方便
function getPoint(){
	var x = 1;
	var y = 10;
	return {x, y};
}

getPoint();

// CommonJS模块输出变量就非常适合使用简洁写法
var ms = {};
function getItem(key){
	return key in ms ? ms[key] : null;
}
function setItem(key, value){
	ms[key] = value;
}
function clear(){
	ms = {};
}

module.exports = { getItem, setItem, clear };
// 等同于
// module.exports = {
// 	getItem: getItem,
// 	setItem: setItem,
// 	clear: clear
// }


// 2 属性名表达式
// 3 方法的name属性
// 4 Object.is()
// 5 Object.assign()
// 6 属性的可枚举性
// 7 属性的遍历
// 8 __proto__属性, Object.setPrototypeOf(),Object.getPrototypeOf()
// 9 Object.keys(), Object.values(), Object.entries()
// 10 对象的扩展运算符
// 11 Object.getOwnPropertyDescriptors()
// 12 Null传导运算符
