const array1 = [4, 76, 7];
const array2 = [3, 96, 17];
const array3 = [...array1, ...array2];
const result = Math.max(...array3)
console.log(result);