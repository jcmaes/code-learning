/* Coercion */

let a = 1 + "hello";
console.log(a);

let b = 1 + "1";
console.log(b);

let c = 1;
let d = "2";
console.log(c + d);

let e = 1;
let f = true; // true = 1;
console.log(e + f);

let g = "test";
let h = false; // false = 0;
console.log(g + h);

let i = 1;
let j = undefined;
console.log(i + j);
console.log(Number(undefined)); // NaN

console.log(String(undefined)); // undefined
