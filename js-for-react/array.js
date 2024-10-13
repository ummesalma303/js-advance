
//   let array = [3, 4, 5];
  
//   const sum = (array) => {
//     let sum = 0;
  
//     for (let items of array) {
//       sum += items;
//       console.log(items)
//     }
//     return sum;
//   }
  
//   console.log(sum(array));

  

  
  let array='[3,4,5]';
  
  const sum =(array)=>{
    if (!Array.isArray(array)) 
    return 'invalid'
    
    let sum=0;
    for (let items of array) 
      sum+=items;
      console.log(sum)
    
    return sum;
  }
  
console.log(sum(array));
  







//   const array=[43,6,3,7];
//   const array2= [...array]
//   const newArray=array.push(99);
//   array2.push(77);
//   array2.push(45)
  
//   console.log(array,array2);
  
  
  
//   const numbers = [3,5,6,8,9,44];
//   const [x,y,...z]=array2;
  
//   console.log(z);
  
  
  
  const number = [89,55,44];
  
  const number2 = [...number];
  //console.log(number2);
  
  const [x,...z]=number2
  //console.log(z);
 
  
