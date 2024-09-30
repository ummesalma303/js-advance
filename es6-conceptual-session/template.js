// const Name = 'mehedy'
// const age = 43
// const job = "bekar"

//  //const sentence = 'amar nam '+ name + ' amar age ' + age + 'ami ' + job;
// // console.log(sentence);

//  const sentence1 = `amar nam${Name} amar age ${age} ami ${job}`;

//  console.log(sentence1);

const myInfo = {
  name: "mehedy",
  age: 25,
  address: "rajshahi",
  sosurName: "Katappa",
  sosurBari: "B.Baria",
  subjects: ["bangla", "english", "math"],
};

const sentence = `amar naam ${name} amar subjects ${myInfo.subjects
  .map((sub) => sub)
  .join(" ")}`;
console.log(sentence);