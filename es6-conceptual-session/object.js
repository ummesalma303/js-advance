const myInfo = {
  name: "mehedy",
  age: 25,
  address: "rajshahi",
  sosurName: "Katappa",
  sosurBari: "B.Baria",
  contact: {
    phone: 264646,
    email: "abc@gmail.com",
  },
};

const myInfo2 = { ...myInfo };
myInfo2.location = "gazipur";

console.log(myInfo);
console.log(myInfo2.location);

// objects distructuring
const { name: myName, age, address } = myInfo; // objects er modde property name k change করা যায়। এবং কোন sequence মেইনটেইন করতে হয় না।
//console.log(name);
console.log(myName);

// dot notation.js
const x = "name";
const s = "sosurName";
console.log(myInfo[x]);
console.log(myInfo[s]);
