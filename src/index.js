// Method 1
const tesla = {
  brand: "tesla",
  wheels: "4",
  hasEngine: true,
};

const renault = {
  brand: "renault",
  wheels: "4",
  hasEngine: true,
};

// Method 2
function Car() {
  this.brand = brand;
  this.wheels = 4;
  this.hasEngine = true;
  this.start = () => {
    console.log("vroum !");
  };
}

const volkswagen = new Car("volkswagen");
const ferrari = new Car("ferrari");

console.log(volkswagen);
console.log(ferrari);
ferrari.start();
