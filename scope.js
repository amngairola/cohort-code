// Scope Chain & Lexical Environment

// // {}
// var x = 2;
// // a();
// parent();
// // console.log(x); // 2

// // Lexical Environment --> The local memory + the lexical environment of the parent

// function parent() {
//   let name = "aman";
//   console.log(name);
//   // x = 10
//   function child() {
//     console.log(x); // Prints 10 (Local to a)
//     console.log(name);
//     // console.log("parent of child  -> ", child.__proto);
//   }
//   child();
// }

// console.log(name);   // reason of name is undifined ??

//------------------------------- let & const (Temporal Dead Zone)

console.log(x);

var x = 2;
