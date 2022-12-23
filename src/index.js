/* Introduction to array  */

// Notation literal
const array = [1, "two", {foo: "bar"}, [1, 2, 3]];
console.log(array);

// Function
const array2 = Array(1, 2, 3);
console.log(array2);

// Constructor
const array3 = new Array(2, 3, 4);
console.log(array3);

// Static methode
const array4 = Array.from("Hello");
console.log(array4);

const array5 = Array.from([10, 20 ,30], number => number + 1);
console.log(array5);

// Check if element is an array
console.log(Array.isArray(array))
