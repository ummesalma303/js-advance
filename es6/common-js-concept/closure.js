function stopWatch() {
    let counter = 0;
    return function () {
        counter++
        return counter
    }
}



const firstServer = stopWatch()
const firstServer2 = stopWatch()
const firstServer3 = stopWatch()
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer2());
console.log(firstServer2());
console.log(firstServer2());
console.log(firstServer2());
console.log(firstServer3());
console.log(firstServer3());





// closure.js

//closer বলা হয় একটা ফাংশনের ভিতরে আরেকটা ফাংশন রিটার্ন করাকে। 


//এক্ষেত্রে একটা ফাংশনের এক্সেস আরেকটা ফাংনের মধ্যে থাকলেও বাহিরে কোন তার এক্সেস নেই।যদি এক্সেস পেতে হয় তাহলে আমাদেরকে রিটার্ন করতে হবে।  
function myCar() {
  let car ='audi';
  function myCar2() {
    console.log('inner',car)
  }
  myCar2()
}
//console.log('outer',car)
myCar(5)



function myCar() {
  let car = 'audi';

  return function () {
    return car
  }
}



//console.log(myCar()) // outer ফাংশন তার পুরো এক্সেস function এর কাছে আছে। এবং সে পুরো lexical scope কে রিটার্ন করে। 
//console.log('outer',car)
const car1 = myCar();
console.log(car1());



//closure এর ক্ষেত্রে প্রতিটি ফাংশন আলাদা আলাদা instance তৈরি করে। যেমনঃ  server1  এর server2 এর সম্পর্কে জানা নেই দুইটা সম্পূর্ণ আলাদা। 

function kitchen() {
  let count = 0;
  return function () {
    return count ++
  }
}

const server1 = kitchen();
const server2 = kitchen();
const  server3 = kitchen();

console.log(server1());
console.log(server1())
console.log(server2());
console.log(server3())
console.log(server3());

