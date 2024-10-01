

//spread.js

const maxNum = Math.max(32,56,67,3,2,89,4,9);

console.log(maxNum);

const numbers = [66,34,6,23,56,78];

const arrMax = Math.max(...numbers);
//console.log(arrMax)


const friend = [90,54,32];
const bondhu = friend;
const newBondhu = bondhu.push(12)

console.log(bondhu,friend);
// spread operator real array tak copy kore jokhon copy kora array te kisu push kora hoi real array poriborton hoi na.
const dost = [...friend];
friend.push(99)
//console.log(dost.push(12));
//console.log(bondhu,dost);



const shonkha =[...friend,9];
//console.log(shonkha,friend)