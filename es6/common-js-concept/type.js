// strongly type language 
// int a =5;
// string b = 'abul';
// boolean c=true;
// object d = {name:'abul'age:56}


// dynamic type language 
// let a =5;
// let b = 'abul';
// let c=true;
// const d = {name:'abul'age:56}


// javascript is a dynamic type programming language 

// primitive type.immutably 

let a = 5;
let b = 'abul';
let c = true;


//non primitive type and it's mutable
const ages = [45, 65, 48];
const student = {id: 23, class: 7};

// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);


let x = a;
x = 8;
console.log(a,x);


let p = {job: 'web developer'};
let q = p;
q.job = 'backend';
console.log(p,q);