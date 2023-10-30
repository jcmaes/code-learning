// Example 1
class Car {
  constructor() {
    this.key = false;
    this._gas = 80;
  }

  get gas() {
    return this._gas;
  }

  set gas(value) {
    if (value > 0) {
      this._gas = value;
    }
  }

  putKey() {
    this.key = true;
  }

  start() {
    console.log("car start");
    if (this.key) {
      this.startEngine();
    } else {
      console.log("should have key");
    }
  }

  startEngine() {
    console.log("start engine");
  }
}

const car = new Car();
car.gas = -20;
