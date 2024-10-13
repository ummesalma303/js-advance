const promise = new Promise((resolved, reject) => {
  console.log("promise is made");
  let err = false;
  setTimeout(() => {
    if (err) {
      // console.log('Promise is resolved');
      resolved("Promise is reloved");
    } else {
      // console.log('Promise is reject');
      reject("Promise is reject");
    }
  }, 2000);
});

promise
//   .then((res) => {
//     console.log(res);
//     // console.log('this is response block')
//   })
//   .catch((error) => {
//     console.log(error);
//     // console.log('this is reject block');
//   })
//   .finally(() => console.log("finally block run"));

const getPromise = async () => {
    try {
        const response = await promise;
    console.log(response);
    } catch (error) {
        console.log(error);
    } finally {
        console.log('finally block run');
    }
};
getPromise()