// var : no reason to use var
// let : allow to reassign but not allow re declaration
// const : do not allow to it reassign and re declaration

const money = 90;
// money = 70; //error

// console.log(money);


let fish = 'fangash';
fish = 'elish';
console.log(fish);

// array
// const arr1 = [98, 43, 453, 45, 65];
// const arr1 = [8, 3, 5, 65];  //error


const arr1 = [98, 43, 453, 45, 67]; 
const arr2 = [98, 43, 453, 45, 65]; 

arr1[2] = 43;
arr1.push(89,43,67)
console.log(arr1);

// object
const obj = {
    name: 'arha',
    class: 5
}
// const obj = {
//     name: 'arha',
//     class: 5
// } //error,but you can also change values

obj.name = 'arha';
obj.name = 'kokil';
console.log(obj);


// loop
// const num = 0; //error
// for (let i = 0; i < 10; i++) {
//     num += i;
    
// }


let num = 0;
for (let i = 0; i < 10; i++) {
    num = i;
    console.log(i);
    
} 
console.log(num);