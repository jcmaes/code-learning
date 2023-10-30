// Example 1
function Vehicle() {
  this.hasEngine = true;
}

Vehicle.prototype.stop = function () {
  console.log("vehicle stop");
};

function Car() {
  Vehicle.call(this);
  this.wheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.start = function () {
  console.log("car start");
};

const car = new Car();
console.log(car); // Car {}

// Example 2
class Motorcycle {
  constructor() {
    this.hasEngine = true;
  }

  start() {
    console.log("engine start");
  }

  stop() {
    console.log("stop engine");
  }
}

class Model extends Motorcycle {
  constructor() {
    super();
    this.wheels = 2;
  }

  start() {
    super.start();
    console.log("start engine");
  }
}

const moto = new Model();
console.log(moto); // Model {}
