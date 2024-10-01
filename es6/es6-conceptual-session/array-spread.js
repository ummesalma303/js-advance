//const array1 = [32,56,77,];
//const array2 = array1;

//array2.push(65);
//console.log(array1,array2)

const array1 = [32, 56, 77];
const array2 = [...array1];

array2.push(65);
console.log(array1, array2);

//destructuring

const names = ["abdul kasem", "kuddus mia", "mokber hossain"];

//const [_,y,z] =names;
const [, , z] = names;

console.log(z);
