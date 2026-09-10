console.log("Start");

//callback q (MACRO)
setTimeout(() => {
  console.log("Timeout 1");
}, 0);

//hp MICRO
Promise.resolve().then(() => {
  console.log("Promise 1");
});
Promise.resolve().then(() => {
  console.log("Promise 2");
});
Promise.resolve().then(() => {
  console.log("Promise 3");
});

console.log("End");

let a = setTimeout(() => {
  Promise.resolve().then(() => {
    console.log("Promise 4 Timeout");
  });
}, 500);

// Promise.resolve().then(() => {
//   setTimeout(() => {
//     console.log("Promise 4 Timeout");
//   }, 500);
// });

let b = setTimeout(() => {
  console.log("Timeout 2");
}, 0);

// web api
//Call Stack
// --------------//
//  GE |
// -------------
//MiCRO Q
// --------------
//
// -------------
//MACRO Q
// --------------
// b
// -------------
