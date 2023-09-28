/* Iterating on an array */

const array = [1, 2, 3];

// Methode for
for(let i = 0; i < array.length; i++ ) {
    console.log(array[i]); // [1, 2, 3];
}

// Methode for of
for(let iteration of array) {
    console.log(iteration);
}

// Methode forEach
array.forEach((value, index) => {
    console.log(`value: ${value}, index: ${index}`);
});
