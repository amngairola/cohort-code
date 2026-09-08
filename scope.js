// ---------------Scope Chain & Lexical Environment

// // {}
// var x = 2;
// // a();
// parent();
// // console.log(x); // 2

// //------------- Lexical Environment --> The local memory + the lexical environment of the parent

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

// console.log(a0);

// var a0 = 2;

// console.log(a1);
// console.log(a2);

// let a1 = "this is a1";
// const a2 = "this is a2";

// a1 = 2;

// console.log(a1);
// console.log(a2);

// !SECTION ----------- Block Scope -------

// scope = {}

{
  let user1 = " a";
  const user2 = "b";
  var user3 = "c";

  //   console.log("user iniside scope ->", user1);
  //   console.log("user iniside scope ->", user2);
  //   console.log("user iniside scope ->", user3);
}

// let user1 = "x";
// const user2 = "y";
// var user3 = "z";
// console.log("user outside scope ->", user1);
// console.log("user outside  scope ->", user2);
// console.log("user outside  scope ->", user3);

// var user3 = "ab";
// console.log("user outside  scope ->", user3);

// function printNum(i) {
//   console.log(i);
// }
// for (const i = 0; i <= 5; i++) {
//   printNum(i);  will get an error -> Assignment to constant variable.
// }

// for (let i = 0; i <= 5; i++) {
//   printNum(i);
// }

// console.log("user outside  scope ->", i);

// ------------ SHADOWING _____--------------------------
// console.log(a);
// let a = 1;
// {
//   let a = 2;
//   console.log(a);

//   {
//     let a = 3;
//     console.log(a);
//   }

//   console.log(a);
// }

// console.log(a);

// --------- closer -> A closure is created when a function remembers and continues to access variables from its outer (lexical) scope, even after the outer function has finished execution.

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

let outerRes = outer();

outerRes();
outerRes();
outerRes();
