// const isVerified = true;
// console.log(isVerified?true:false);


function getTimeString(time) {
    const hour = time / 3600;
    let remainingSeconds = time % 3600;
    const minutes = remainingSeconds / 60;
    remainingSeconds=remainingSeconds % 60;
    return `${parseInt(hour)} hour ${parseInt(
      minutes
    )} minutes ${remainingSeconds} second ago`;
}

console.log(getTimeString(7865));