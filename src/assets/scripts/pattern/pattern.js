/*
 * 1、创建型设计模式
 * 工厂方法模式、抽象工厂模式、单例模式、建造者模式、原型模式
 * Constructor(构造器)
 * Factory(工厂)
 * Abstract(抽象)
 * Prototype(原型)
 * Singleton(单例)
 * Builder(生成器)
 */

/* 2、结构型设计模式
适配器模式、装饰器模式、代理模式、外观模式、桥接模式、组合模式、享元模式
Decorator(装饰者)
Facade(外观)
Flyweight(享元)
Adapter(适配器)
Proxy(代理) */

// 3、行为设计模式
// 策略模式、模板方法模式、观察者模式、迭代子模式、责任链模式、命令模式、备忘录模式、状态模式、访问者模式、中介者模式、解释器模式
// Iterator(迭代器)
// Mediator(中介者)
// Observer(观察者)
// Visitor(访问者)

// Constructor
// var civic = new Car('Honda Civic', 2009, 20000);
// var mondeo = new Car('Ford Mondeo', 2010, 5000);

// console.log(civic.toString());
// console.log(mondeo.toString());

// Module
var myModule = {
    myProperty: 'someValue',
    // 对象字面量可以包含属性和方法
    // 例如，可以声明模块配置对象
    myConfig: {
        useCaching: true,
        language: 'en'
    },
    // 基本方法
    myMethod: function () {
        console.log('Where in the world is Paul Irish today?')
    },
    // 根据当前配置输出信息
    myMethod2: function () {
        console.log(
            'Caching is:' + this.myConfig.useCaching ? 'enabled' : 'disabled'
        )
    },
    // 重写当前的配置
    myMethod3: function (newConfig) {
        if (typeof newConfig === 'object') {
            this.myConfig = newConfig
            console.log(this.myConfig.language)
        }
    }
}

myModule.myMethod()
myModule.myMethod3({
    language: 'fr',
    useCaching: false
})

// Factory
function VehicleFactory () {}
VehicleFactory.prototype.VehicleClass = Car
VehicleFactory.prototype.createVehicle = function (options) {
    if (options.vehicleType === 'car') {
        this.vehicleClass = Car
    } else {
        this.vehicleClass = Truck
    }
    return new this.vehicleClass(options)
}
var carFactory = new VehicleFactory()
var car = carFactory.createVehicle({
    vehicleType: 'car',
    color: 'yellow',
    doors: 6
})

console.log(car instanceof Car)
console.log(car)
