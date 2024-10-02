let a = 5; //global context

function add(num1, num2) {
  console.log(num1, num2, a);
  const result = num1 + num2 + a; // functional context
  return result;
}
const sum = add(3, 6);
console.log(sum);