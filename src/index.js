// Example 1

const options = {
  startRadio() {
    console.log("start radio");
  },
  stopRadio() {
    console.log("stop radio");
  },
};

class Car {}

Object.assign(Car.prototype, options);

const car = new Car();

car.startRadio();

console.log(car); // start radio Car {}
