/* Merging arrays */

// Superficial way (shadow copy)
const a = [1, 2, 3];
const b = [4, 5, 6];
const c = [7, 8, 9];

// Wrong way
const merge1 = a + b;

console.log(merge1); // [1, 2, 34, 5, 6];

// Methode Concat
const merge2 = a.concat(b).concat(c);

console.log(merge2); // [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Methode Spread
const merge3 = [...a, ...b, ...c]

console.log(merge3); // [1, 2, 3, 4, 5, 6, 7, 8, 9];
