/* Add elements to an array */

let array = [1, 2, 3];

// Mutate element
array[0] = "a";

console.log(array[0]); // a

// Add elements (number) to the beginning
array.unshift(-1, 0);

console.log(array); // [-1, 0, "a", 2, 3]

// Add elements (number) to the end
array.push(4, 5);

console.log(array); // [-1, 0, "a", 2, 3, 4, 5]

// Spread operator
array = [...array, 6];

console.log(array); // [-1, 0, "a", 2, 3, 4, 5, 6]

array = [-2, ...array];

console.log(array); // [-2, -1, 0, "a", 2, 3, 4, 5, 6]

// Function splice
array.splice(1, 0, -1.5);

console.log(array); // [-2, -1.5, -1, 0, "a", 2, 3, 4, 5, 6]
