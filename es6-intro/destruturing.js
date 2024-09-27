const actor ={
    name: 'ananta',
    phone: '01234576889',
    age: 30,
    type: 'model'
  }
  //console.log(actor.phone);
  //console.log(actor.phone);
  //const phone = actor.phone;
  //console.log(phone);
  //console.log(phone);
  //console.log(phone);
  
  const {phone,name,age} = actor;
  
  //console.log(phone);
  //console.log(phone);
  //console.log(name);
  //console.log(age);
  
  
  // destructuring of array
  
  const [a,b]=[6,7];
  //console.log(a,b);
  
  const number = [2,4];
  
  const [num1,num2] = number;
  
  console.log(num1,num2);
  
  
  // destructuring of function 
  
  function doubleThem() {
    return [a*2,b*2];
  }
  
  const [prothom,ditiyo] = doubleThem(6,9);
  console.log(prothom,ditiyo);
  
  
  // change property 
  
  const {age: boyosh} = actor;
  //console.log(boyosh)
  