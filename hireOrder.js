// const arr = [5, 1, 3, 2, 6];
// // Map
// const double = arr.map((x) => x * 2);

// console.log(double);

// // Filter
// const odd = arr.filter((ele) => ele % 2 !== 0);
// console.log(odd);

// // Reduce (Sum)

// // sum = acc
// const sum = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(sum);

//(sum) acc -> 0 | 5 |6 | 9 |11 | 17
// cur -> | 5 |1| 3| 2 |6 |

// const arr = [5, 1, 3, 2, 6];
// sum= 0 , cur  -> 0
// function ab(sum , cur , arr){
//     if(cur == arr.length) return 0;

//     sum = ab(sum , cur+1 , arr);

//     sum+=arr[cur];

//     return sum;
// }

const users = [
  { name: "Aman", age: 22, salary: 50000 },
  { name: "Rahul", age: 25, salary: 60000 },
  { name: "Priya", age: 21, salary: 45000 },
];

const updatedUsers = users.map((user) => ({
  ...user,
  salary: user.salary + 10000,
}));

// console.log(updatedUsers);

const filterdUsers = users.filter((user) => user.salary >= 50000);

console.log(filterdUsers);

const totalSalary = users.reduce((sum, user) => {
  return sum + user.salary;
}, 0);

console.log(totalSalary);
