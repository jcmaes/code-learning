// Example 1
const vehicle = {
  hasEngine: true,
  start() {
    console.log("vroum !");
  },
};

function Car(brand) {
  this.brand = brand;
}

Car.prototype = vehicle;

const myCar = new Car("renault");

console.log(myCar);
