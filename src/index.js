/* Numbers */

const a = 1.5555555555;
const b = new Number(1);

console.log(a);
console.log(b);

console.log(a.toFixed(2)); // 1.56
console.log(a.toString(2)); // 1.56

const c = Number("123");
console.log(Number.isNaN(c)); // false

const d = Number("55.1");
console.log(Number.isInteger(d)); // false
