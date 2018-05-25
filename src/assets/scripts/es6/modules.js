// export var firstName = 'Michael';
// export var lastName = 'Jackson';
// export var year = 1958;

// var firstName = 'Michael';
// var lastName = 'Jackson';
// var year = 1958;

// export {firstName, lastName, year};

// export function multiply(x, y){
//     return x * y;
// };

// function v1(){};
// function v2(){};

// export {
//     v1 as streamV1,
//     v2 as streamV2,
//     v2 as streamLatestVersion
// };

// export default function(){
//     console.log('default');
// };

export default function(name, color) {
    // 私有属性
    var type = '泰迪'

    // 私有方法
    function eat() {
        console.log('狗吃骨头')
    }

    // 公有属性
    this.name = name
    this.color = color

    // 特权方法
    this.sayName = function() {
        console.log(this.name)
    }
}
