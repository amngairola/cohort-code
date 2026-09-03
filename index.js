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

console.log(first);
console.log(js1);

var first = 10; // first = undifined
var second = 10;

function js1(a, b) {
  //local variables
  const sum = a + b;
  return sum;
}
function js2(a, b) {
  //local variables
  const sum = a + b;
  return sum;
}

//console.log(sum)

var res = js1(first, second);
// console.log(res);

js2();
