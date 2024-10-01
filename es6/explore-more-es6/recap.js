// 1.variable
// 2. template string
// 3. arrow function
// 4. default parameter
// 5. destructuring and Spread operator

const a = 56;
const number = [4, 3, 2];
const person = {
  name: "sakib khan",
};

const message = `hi ${person.name} has ${number[1]}`;
console.log(message);

const sqr = (x) => x * x;
console.log(sqr);

const { x, y, ...others } = { x: 2, y: 2, name: "ovijeet", age: 24 };
console.log(x, y, others);

const [first, second, ...remaining] = ["ram", "sam", "jodu", "modhu"];
console.log(first, second, remaining);