/* Comparisons */

// Assignment
let a = 1, b = 2;
console.log(a == b); //false

// Equality
let c = 1, d = 1;
console.log(c == true); //true

console.log(true == "true"); // true
console.log(true === "true"); // false

// Greater / Less with coercion
console.log(1 < 2 < 3); // true
console.log(3 < 2 < 1); // true
// -> 3 < 2 = false
// -> false coercion = 0
// -> 0 < 1 = true

// Logical NOT
let e = 1, f = 1;
console.log(!e); // false
// !true = false
// !false = true
// !!true = true

// Logical AND
let g = 1, h = 1;
if (g && h) {
    console.log("ok");
}

// Logical OR
let i = 1, j = 0;
if (i || j) {
    console.log("nok");
}
