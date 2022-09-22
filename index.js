// const myPromise = new Promise((resolve, reject) => {
//     const arr = [1, "hello", 2, "world"]
//     const rando = Math.floor(Math.random() * 4);
//     const item = arr[rando];
//     if (typeof(item) == "string") {
//         resolve();
//     } else {
//         reject();
//     }
// });

// myPromise.then(() => {
//     console.log("It is a string");

// }).catch(() => console.log("It is a number"))


// const myPromise = async () => {
//     const arr = await [1, "hello", 2, "world"]
//     const rando = await Math.floor(Math.random() * 4);
//     const item = arr[rando];
//     if (typeof(item) == "string") {
//         console.log("string");
//         return;
//     } else {
//         return error;
//     }

// };

// myPromise().catch((err) => console.log(err));
