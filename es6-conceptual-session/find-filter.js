const numbers = [12, 32, 25, 75, 13, 55, 97, 25];

const result = numbers.find((num) => num > 50 && num % 2 === 0);

console.log(result);

const output = numbers.filter((num) => num > 50 && num % 2 === 0);
console.log(output);