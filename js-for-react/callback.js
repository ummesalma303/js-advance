const fun1 = (x,y,callbacks) => {
    callbacks(x,y)
}
const fun2 = (x,y) => {
    console.log(x+y);
    
}
fun1(5, 6, fun2);



const giveName = (name, callback) => {
    console.log('inner');
    setTimeout(() => {
   callback(name)
    }, 2000);
}

const greeting = (name) => {
    console.log(`Hello ${name} ...`);
}
console.log('first line of code');

giveName('aru',greeting)
console.log('least line of code');