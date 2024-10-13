//  forEach,map,find,filter,reduce

const numbers = [4, 3, 6, 1,8];

const numbersArray = numbers.forEach(numbers => {
    // console.log(numbers);
    // return numbers
});
// console.log(numbersArray);


const map = numbers.map((numbers, index,array) => {
    console.log(numbers,index,array);
    
});
// console.log(map);

const sentence = `my numbers are ${numbers.map(num => num).join('*')}`
console.log(sentence);

const find = numbers.find(num => num > 106);
console.log(find);// jodi condition onujayi kono value khuje na pai undefined return kore

const filter = numbers.filter(num => num > 106)
console.log(filter);//jodi condition onujayi kono value khuje na pai tahole empty array return kore


const number = [4, 3, 6, 1,8];
// let sum = 0;
// numbers.forEach(num => sum += num);
// console.log(sum);

// const total = number.reduce((prev,current) => prev+current, 0);
// console.log(total);


const products = [
    {price:1},
    {price:2},
    {price:3},
    {price:4}
]

const total = products.reduce((previous, current) => previous + current.price, 0)
console.log(total);
