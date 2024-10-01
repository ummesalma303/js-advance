function sum(a,b,c) {
  console.log(arguments[4])
  console.log(typeof arguments);
  console.log(Array.isArray(arguments));
  const args= [...arguments];
  console.log(args)
  
  // loop
  for (let arr of arguments) {
    console.log(arr)
  }
  const result = a +b+c;
  return result
}

const total = sum(5,6,2,9,7,5);
console.log(sum.length)//perameter length 
console.log(total);
