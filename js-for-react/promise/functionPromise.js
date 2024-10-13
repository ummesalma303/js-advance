const getPromise = () => {
    return new Promise((resolved, reject) => {
        console.log("promise is made");
        let err = true;
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
}
getPromise()
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});