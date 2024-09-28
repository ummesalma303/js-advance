const products = [
    { id: 1, name: "lenovo", price: 65000 },
    { id: 2, name: "dell", price: 45000 },
    { id: 3, name: "hp", price: 40000 },
    { id: 4, name: "mac", price: 150000 },
  ];
  
  const product = products.map((p) => p.price);
  
  const name = products.map((p) => p.name);
  //console.log(product,name);
  
  // for each
  const id = products.forEach((p) => {
    //  console.log(p.id)
  });
  
  // filter()
  
  const expensive = products.filter((p) => p.price > 50000);
  console.log(expensive);
  
  const lowestPrice = products.find((p) => p.price < 50000);
  console.log(lowestPrice);
  
  const totalPrice = products.reduce((acm, current) => acm + current.price, 0);
  
  //console.log(totalPrice);  