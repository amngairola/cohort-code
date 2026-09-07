// -------------------scope chain in js

// var x = 2;
// a();
// b();
// console.log(x); // 2

// function b() {
//   function a() {
//     console.log(x); // Prints 10 (Local to a)
//   }
//   a();
// }

// function b() {
//   var x = 100;
//   console.log(x); // Prints 100 (Local to b)
// }
// Global
// console.log; //prints 1

//------------------- Functions & Variable Environment

// var -> global scoped funtional scoped
var x = 2;
console.log("1 -> ", x);

a();
b();

function a() {
  x = 200;
  console.log("2 -> ", x); // Prints 10 (Local to a)
}

function b() {
  var x = 100;
  console.log("3 -> ", x); // Prints 100 (Local to b)
}

var x = 1000;
console.log("4 -> ", x);

// window obj

console.log(window);
