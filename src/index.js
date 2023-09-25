/* Delete elements in an array */

const array = [1, 2, 3];

// Delete element at the beginning
array.shift();

console.log(array) // [2, 3]

// Delete element at the end
array.pop();

console.log(array) // [2]

// Methode Rest
const array2 = [1, 2, 3, 4, 5];

const [, ...newArray2] = array2;

console.log(array2); // [2, 3, 4, 5]

// Function Splice
array2.splice(2, 2);

console.log(array2); // [1, 2, 5]
