const obj = {
  name: "hello",
  age: 42,
  address: "rajshahi",
  nest: {
    city: "world",
  },
};

const obj2 = { ...obj };
obj2.phone = "Samsung";
obj2.age = 10;
obj.age = 90;
console.log(obj2, obj);

const { age, name: myName, nest, ...remaining } = obj;
console.log(remaining?.address);
console.log(nest);
console.log(myName);
