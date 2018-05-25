// 递归
// function factorial(num){
//     if(num <= 1){
//         return 1;
//     }else{
//         return num * factorial(num - 1);
//     }
// }

// function factorial(num){
//     if(num <= 1){
//         return 1;
//     }else{
//         return num * arguments.callee(num - 1);
//     }
// }

var factorial = function f (num) {
  if (num <= 1) {
    return 1
  } else {
    return num * f(num - 1)
  }
}

// 闭包

// bind

// apply

// call
