/* Nesting array */

const array = [["earth", "moon"], "sun" ];
console.log(array[0]); // "earth, moon"
console.log(array); // Array(2), "sun"
console.log(array[0][0]); // "earth"
console.log(array[0][array[0].length - 1]); // "moon"
