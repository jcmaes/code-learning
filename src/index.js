/* Object primitive */

// String
const name = "jean";
console.log(typeof name);

// Number
const age = 18;
console.log(typeof age);

// Null
const hobbies = null;
console.log(typeof hobbies);

// Undefined
let actions;
console.log(typeof actions);

// Symbol
let sym = Symbol();
console.log(typeof sym);

// Boolean
let active = true;
console.log(typeof active);


/* Object literal */

// Object
const cities = {
    name: "Paris",
    country: "France"
}
console.log(typeof cities);

// Function
const greetings = function() {
    console.log("Hello");
}
console.log(typeof greetings);

// Date
const today = new Date();
console.log(typeof today);

// Array
const arr = [1, 2, 3];
console.log(typeof arr);
