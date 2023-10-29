// Example 1
const engine = {
  power: 240,
};

const vehicle = {
  hasEngine: true,
  start() {
    console.log("vroum !");
  },
};

vehicle.__proto__ = engine;

const bus = {
  brand: "volvo",
};

bus.__proto__ = vehicle;

const car = {
  brand: "renault",
};

car.__proto__ = vehicle;

console.log(car);
console.log(car.hasEngine); // true
car.start(); // vroum !
console.log(vehicle.power); // 240
console.log(car.power); // 240

// Example 2
const bicycle = {
  hasAssistance: true,
  go() {
    console.log(this.hasAssistance);
    console.log("go !");
  },
};

const model = {
  brand: "Trek",
};

model.__proto__ = bicycle;

model.hasAssistance = false;

for (let key in model) {
  console.log(model.hasOwnProperty(key));
  console.log(key);
}
