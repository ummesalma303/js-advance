const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve('result of promise => 1')
    }, 1000);
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('result of promise => 2')
        reject('reject => 2')
    }, 2000);
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('result of promise => 3')
    }, 3000);
})
console.log('promise..........');
//     promise
//     .then((response) => {
//         console.log(response)
//         promise2
//             .then((response) => {
//                 console.log(response);
//                 promise3
//                     .then((response) => {
//                     console.log(response);
//                 })
//         })
//     })
//         .catch((error) => {
//     console.log(error);
// })


Promise.all([promise,promise2,promise3])
    .then(values => {
    console.log(values);
    })
    .catch(error => {
    console.log(error);
})

// const getPromise = async () => {
//    try {
//     const [results1,result2,result3] = await Promise.all([promise, promise2, promise3]);
//     console.log(results1,result2,result3);
//    } catch (error) {
//     console.log(error);
//    }
// }
// getPromise()