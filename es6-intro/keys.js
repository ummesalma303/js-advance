const glass = {
    name: 'glass',
    color: 'golden',
    price: 12,
    isCleaned: true
  };
  
  const keys = Object.keys(glass);
  const values = Object.values(glass);
  const entries = Object.entries(glass)
  console.log(keys);
  console.log(values);
  console.log(entries);
  
  //delete property 
  //delete glass.color
  
  const {isCleaned, ...shortgalass} = glass
  console.log(glass);
  console.log(shortgalass);
  //Object.freeze(glass);
  
  glass.source = 'Bangladesh'
  console.log(glass);
  
  Object.seal(glass);
  glass.price = 500;
  
  console.log(glass);
  delete glass.name
  console.log(glass)