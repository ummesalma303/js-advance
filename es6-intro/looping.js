// for of use on array or string not in object
  // for in use on object
  
//   const numbers = [1, 6, 8, 4];
//   for (let num of numbers ) {
//    // console.log(num)
//   }
  
  
  const nobab = 'Siraj Ud Doula';
  for (let char of nobab) {
  //  console.log(char)
  }
  
  const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
  };
  
  for (let key in glass) {
    const value = glass[key]
    console.log(key,value)
  }
  
  const keys = Object.keys(glass);
  console.log(keys);
  
  for (let key of keys) {
    const value = glass[key];
    console.log(value)
  }