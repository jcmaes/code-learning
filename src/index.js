/* The index and length properties */

const a = "earth";

console.log(a[0]); // e
console.log(a[1]); // a
console.log(a[2]); // r
console.log(a[3]); // t
console.log(a[4]); // h
console.log(a[5]); // undefined

console.log(a.length); // 5

console.log(a[a.length - 1]); // h

const b = new String("earth");
console.log(b);
