// primitive type are passed by value
let num1 = 5;
let num2 = 7;

function multiply(a,b) {
  a = 2;
  const result = a*b;
  console.log(a)
  return result
}
console.log(num1)
const total = multiply(num1,num2);
console.log(num1);
console.log(total);



// object and array are passed by reference
let student1 = {name: 'Jalil', partner: 'borsha'};
let student2 = {name: 'raj', partner: 'anika'};

function makeMovie(couple1,couple2) {
  couple1.name = 'ontora';
  couple2.name = 'tini'
  //console.log(couple1,couple2)
}
//console.log(student1,student2)
const movie = makeMovie(student1,student2);

console.log(student1,student2);


const players = [72, 65, 67, 75, 55, 59];
const selected = players.find(player => player > 60);
console.log(selected);
