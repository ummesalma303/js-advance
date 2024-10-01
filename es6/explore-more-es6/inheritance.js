class Vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  move() {
    return `${this.name} chole na chole na chole na re`;
  }
}

class Bus extends Vehicle {
  constructor(name, price, ticket, seat) {
    super(name, price);
    this.seat = seat;
    this.ticket = ticket;
  }
  load() {
    console.log(`${move()}this is a ${this.name}`);
  }
}

const newBus = new Bus("brtc", 500000);
//console.log(newBus.move());

class Truck extends Bus {
  constructor(name, price, load) {
    super(name, price);
    this.load = load;
  }
}

const truck = new Truck("tisha", 30000);

console.log(truck);
