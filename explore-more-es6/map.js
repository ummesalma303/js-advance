// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array

const numbers = [4, 5, 2, 8, 10];

// before using map()

// const doubled = [];
// for (const num of numbers) {
//    doubled.push(num*2)
// }
// console.log(doubled);

// after using map()
// normal function
function doubleIt(num) {
  return num * 2;
}
const result = numbers.map(doubleIt);
console.log(result);

// arrow function
const double2 = (num) => num * 2;
const result2 = numbers.map(double2);
console.log(result2);

// callback function
const output = numbers.map((num) => num * 2);
console.log(output);

// addition
const number = [12, 10, 8, 15, 7];
const fiveBonus = number.map((num) => num + 5);
console.log(fiveBonus);

// divide
const halves = number.map((num) => num / 2);
console.log(halves);

const friends = ["Tom", "John", "Micheal", "Oliver"];

const length = friends.map((friend) => friend.length);
console.log(length[0]);

// first latter
const firstLatter = friends.map((friend) => friend[0]);
console.log(firstLatter);

/* ---------------------------------- jodi value khuje na pai empty array return kore ---------------------------------- */