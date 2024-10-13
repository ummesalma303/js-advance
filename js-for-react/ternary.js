const person = {
  name: "salma",
  roll: 289,
  isStudent: true,
};

//let sentence = '';

//if (person.isStudent===true) {
//  sentence = 'i am a student'
//} else {
//  sentence= 'i am not a student'
//}

let sentence = person.isStudent ? "i am a student" : "i am not a student";

console.log(sentence);
