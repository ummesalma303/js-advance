console.log(1);
console.log(2);
// doSomething()
const timeOutId = setTimeout(() => {
  console.log('lazy logged',3);
}, 2000);


// setTimeout(doSomething)


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data=>console.log(data))
console.log(4);
console.log(5);
console.log(6);

function doSomething() {
    console.log(3);
}
let num = 0;
const setCIntervelId = setInterval(() => {
    console.log(num++);
    clearInterval(setCIntervelId)
},3000)