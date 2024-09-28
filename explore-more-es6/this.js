// function abong class er khetre this bola hoi property abong method k.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`Sleeping now ${this.name}`);
  }
  activity() {
    this.sleep();
  }
}

const kodom = new Person("kodom", 21);
console.log(kodom);

kodom.sleep();

//const lazy = kodom.sleep;
//lazy()
