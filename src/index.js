// Method 1
const obj = {
  key: "value",
};

obj.key = "value2";

console.log(obj); // {key: "value2"}

for (let key in obj) {
  console.log(obj); // key
}

// Method 2
const obj2 = {
  key: "newValue",
};

obj2.key = "newValue2";

console.log(Object.keys(obj2)); // ["key"]
console.log(Object.values(obj2)); // ["newValue2"]
console.log(Object.entries(obj2)); // [Array(2)] ["key", "newValue2"]

// Method 3
const obj3 = {
  key: "anotherNewValue",
};

obj3.key = "anotherNewValue3";

const descriptor = Object.getOwnPropertyDescriptor(obj, "key");

console.log(descriptor); // {value: "", writable: true, enumerable: true, configurable: true}

// Property by property
Object.defineProperty(obj3, "key", {
  writable: false,
});

// Method 4
const obj4 = {
  key: "value",
};

obj4.key = "value4";

const descriptors = Object.getOwnPropertyDescriptors(obj4);

// All properties in the same time
Object.defineProperties(obj4, {
  test: {
    value: "newValue4",
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

console.log(descriptors); // {key: {}}
