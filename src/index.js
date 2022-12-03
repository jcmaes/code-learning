/* Compare objects */

const a = {};
const b = {};
const c = b;

console.log(a === b); // false
console.log(b === c); // true
