// undefined |  not defiend

// let a = undefined;
/* 
----Two Phases of Execution------
---- 1-- Memory Creation Phase:
    1 - JS runs through the code, line by line
    2 - It allocates memory to all variables and functions.
    var - undefined
    function - entire code of the function in memory

  --- EX--  let fname = undefined
            let lname = undefined;
  
 ---- 2 ---Code Execution Phase :
    1 - JS runs through the code again, line by line
            let fname = "java"
            let lname = "script";

            js(); - executes function invocations (calls)

*/
debugger;
console.log(first); //undefined
console.log(js1); //js1 full code
// console.log(a); // not defined
js1(); //js1 called

//let ress = js1();

var first = 10; // first = undifined
var second = 10;

debugger;
function js1(a, b) {
  //local variables
  let name = "this is my name";
  console.log("js1 called ");
  console.log(name);
  return a + b;
}
// console.log(name);

function js2(a, b) {
  //local variables
  const sum = a + b;
  return sum;
}

console.log("this is js4 -> ", js4);
let js4 = (a, b) => {
  const sum = a + b;
  return sum;
};

//console.log(sum)
debugger;
var res = js1(first, second);
console.log(res);

debugger;
js2();

// var  -> as a variable treat  -> undifined
// let ->  not hoisted
// const ->  not hoisted
// function  -> as a function -> full code save
