class Products {
  country = "Bangladesh";
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

const laptop1 = new Products("lenovo", 60000);

const laptop2 = new Products("del", 40000);
console.log(laptop1, laptop2);

const coun = new Products("England ");
const product3 = new Products("😊");
console.log(product3);
console.log(coun);

class Teacher {
  lecture() {
    "Sir is teaching Mat👋";
  }
  constructor(name, subject) {
    this.prop = name;
    this.subject;
  }
}

const nam = new Teacher("abul", "English ");
//const topan = new Teacher.lecture('dfgj fhj.....');

console.log(nam);

class Product {
  country = "Bangladesh";
  constructor(name) {
    this.name = name;
  }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}

const lenovo = new Product("ghhj bers");
const n = (Product.speak = "ohg hk");
console.log(n);
