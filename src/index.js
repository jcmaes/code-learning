const vehicle = {
  hasEngine: true,
};

const car = Object.create(vehicle, {
  wheels: {
    value: 4,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

Object.setPrototypeOf(car, vehicle);

console.log(car);
console.log(Object.getPrototypeOf(car));
