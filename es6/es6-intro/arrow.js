//regular function syntax

//function multiplyNum(a,b) {
// const multiply = a*b
//  return multiply
//}


//arrow function syntax 
//const myFunction = () => a*b;

function multiplyNum(a,b) {
const multiply = a*b;
return multiply
}
console.log(multiplyNum (5,6))



multiply=(num1,num2,num3)=>num1*num2+num3

//console.log(multiply(4,5,2))


//single or one parameters arrow function 

add = num => num*2;

//console.log(add(5))

// no parameters arrow function 

add2=()=>Math.random()
//console.log(add2())

const students={
  name:'sharukh',
  roll:12
}
getRoll=roll=>roll;

//console.log(getRoll(students.roll));


const array = [45,78,89]

const getThird = arr=>array[1]

console.log(getThird(array))

// large arrow function
const large=(num1,num2,num3) => {
  const sum = num1 + num2 + num3
  const multiply = num1 * num2* num3
  return sum + multiply+num3
}
//console.log(large(6,7,4))
  