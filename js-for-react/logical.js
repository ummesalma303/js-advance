const person = {
  name: "salma",
  roll: 289,
  isStudent: false,
  deatails: "i am a human",
};

// jodi isStudent true hoi tahole i am a student print korbe.

console.log(person.isStudent && "i am a student");

//console.log(person.isStudent||'N/A');

const details = person.deatails || "N/A";
console.log(details);
