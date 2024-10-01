// If no argument is given then the parameter is undefined.  So the default value can be set

function add(num1,num2=1) {
  const result=num1+num2;
  console.log(num1,num2,result)
  return result
}

const sum = add(9);

console.log(sum)


//jodi argument passed kora hoi tahole default value kaj korbe na.jodi argument pass na kora hoi tahole default value kaj korbe.

// function add(num1=2, num2 = 1) {
//   const result = num1 + num2;
//  // console.log(num1, num2, result)
//   return result
// }
// const sum = add();

// //console.log(sum)





// function add(num1=2, num2 = 1) {
//   console.log(num1)
//   const result = num1 + num2;
//   console.log(num1, num2, result)
//   return result
// }

// const sum = add(6,8);

// console.log(sum)





//amra shobkisutei function er modde default value use korte pari 

function add(first, least = '') {
  const result = first + least;
  //console.log(first, least, result)
  return result
}

const name = add('aru');

//console.log(name)




let arr=['koyel','doyel','tisha'];
function friendName(first=[]) {
//  console.log(first)
}

const friends = friendName();



const human = {
  name:'jhon',
  class:2
}
function person (obj={}) {
//  console.log(obj)
}
person(human);
