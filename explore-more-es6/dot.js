const person = {
  name: "kodom ali",
  job: "badam khai",
  3: "third",
  "add-dress": "kochu khet",
};

console.log(person.name);
//console.log(person.3) //error
console.log(person["3"]);
console.log(person["add-dress"]);
