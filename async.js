// const fetchData = new Promise(function (res, rej) {
//   let data = false;

//   if (data) {
//     res("user data successfulluy fetched...");
//   } else {
//     rej("user data cannot be fetched...");
//   }
// });

// //consuming a promise

// // console.log(typeof myPromise);

// // fetchData
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .then((res) => {
// //     console.log(res);
// //   })
// //   .catch((err) => {
// //     console.error(err);
// //   })
// //   .finally(() => {
// //     console.log("promise fullfilled..");
// //   });

// async function runMyPromise() {
//   try {
//     const jsonData = await fetchData;
//     console.log(jsonData);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     console.log("promise fullfilled..");
//   }
// }

// runMyPromise();

const url = `https://api.github.com/users`;

// https://api.github.com/users/react

const fetcData = async (username) => {
  try {
    const jsonRes = await fetch(`${url}/${username}`);
    const res = await jsonRes.json();
    console.log(res.name);
    console.log(res.public_repos);
    console.log(res.location);
  } catch (error) {
    console.log(error);
  }
};

fetcData("amngairola");
