/* Reference and Value */

let a = 1;
let b = a;

console.log({a, b}); // a = 1; b = 1;

b += 3;
console.log({a, b}); // a = 1; b = 4;

let c = { d: 1};
let e = c;
console.log(c); // c = 1;
console.log(e); // e = 1;

let f = { g: 1};
let h = f;

h.g = 2; // Copy by reference
console.log(f); // f = 2;
console.log(h); // h = 2;