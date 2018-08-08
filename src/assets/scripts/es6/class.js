class Animal {
    constructor () {
        this.type = 'animal'
    }

    say (str) {
        // console.log('${this.type}say:${str}');
        setTimeout(() => {
            console.log(this.type + ' says:' + str)
        }, 1000)
    }
}

export default class extends Animal {
    constructor () {
        super()
        this.type = 'dog'
    }
}

// 1 Class基本用法
// 定义类
// es5写法
// function Point(x, y){
//     this.x = x;
//     this.y = y;
// }

// Point.prototype.toString = function(){
//     return '(' + this.x + ',' + this.y + ')';
// };

// es6写法
class Point {
    constructor (x, y) {
        this.x = x
        this.y = y
    }

    toString () {
        return '(' + this.x + ', ' + this.y + ')'
    }
}

var p = new Point(1, 2)
console.log(p.toString())

// 2 Class的继承

class ColorPoint extends Point {
    constructor (x, y, color) {
        super(x, y)
        this.color = color
    }

    toString () {
        return this.color + ' ' + super.toString()
    }
}

var p2 = new ColorPoint(1, 2, 'red')
console.log(p2.toString())
// 3 原生构造函数的继承
// 4 Class的getter和setter
// 5 Class的Generator方法
// 6 Class的静态方法
// 7 Class的静态属性和实例属性
// 8 类的私有属性
// 9 new.target属性
// 10 minin模式的实现
