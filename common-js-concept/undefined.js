/*
8ways to get undefined.
1. variable that is not initialized will give undefined
2. function with no return 
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. je property object er modde nei oi property jodi amra access korte chai tahole undefined ashbe
6. je items array er modde nei oi items jodi amra access korte chai tahole undefined ashbe
7. object er kono property k delete korar por access korte chaile undefined ashbe (array er kono items k delete korar por empty/undefined ashbe);
8. set a value directly to undefined(amra kono valuek directly undefined aset korbo na ❌❎ jodi proyojon hoi null set korbo.✅😊)

*/

let x;
console.log(x)

function second(a,b) {
  a+b;
}
const result = second(6,8);
console.log(result)

function third(a,b) {
    console.log(a,b);
    
}
 third();



function noNegative(a,b) {
    if (a<0 || b<0) {
        return
    } return a+b
}

const total = noNegative(0, -6);
console.log(total);


const fifth = { id: 2, name: 'ponchom', age: 40 };
console.log( fifth.age,fifth.sealery);


const sixth = [4, 89, 87, 56, 54];
console.log(sixth[4],sixth[9]);

delete fifth.age
console.log(fifth.age);
