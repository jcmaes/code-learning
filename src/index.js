/* Array decomposition and rest operator */

const array = [1, 2, 3, 4, [5, 6]];

const a = array[0];
const b = array[1];

console.log(a); // 1
console.log(b); // 2

const [c, d] = array; // 3, 4

// Const rest
const [newA, ...rest] = array; // 2, 3, 4


const e = array[3];
const f = array[4];

const [[f1, f2], ]= array;
console.log(e); // 4
console.log(f1); // 5
console.log(f2); // 6

//Skip the first element
const array2 = [1, 2, 3];

const [, ...newArray2] = array2;
console.log(array2); // [2, 3]

// Inverse value between const
// Old school way
let g = 'g';
let h = 'h';

// Temporary
const tmp = g;

g = h;
h = tmp;

console.log("g : ", g); // h
console.log("h : ", h); // g

// New school way
let i = 'i';
let j = 'j';

[i, j] = [j, i];

console.log("i : ", i); // j
console.log("j : ", j); // i
