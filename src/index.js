/* Copy an array */

// Superficial way (shadow copy)
const array = [1, 2, 3];

const copy = array;

copy.push(4);

console.log(array); // [1, 2, 3, 4];

const b = array => {
    array.push(6);
}

b(array);

console.log(b); // [1, 2, 3, 4, 6];

// Methode Slice (shadow copy)
const newArray = [4, 5, 6];

const newCopy = newArray.slice(1, 2);

console.log(newCopy); // [5]

newCopy.push(7);

const newCopy2 = newArray.slice();

console.log("newArray : ", newArray); // [4, 5, 6]
console.log("newCopy2 : ", newCopy2); // [4, 5, 6, 7]

// Methode Spread operator (shadow copy)
const array2 = [
    10,
    {
        name: "sun"
    },
    30
];

const copy2 = [...array2];

copy2.push(4);

console.log("array2 : ", array2); // [4, {name: "sun"}, 6]
console.log("copy2 : ", copy2); // [4, {name: "sun"}, 6, 7]

// Methode static (shadow copy)
const array3 = [
    100,
    {
        name: "earth"
    },
    300
];

const copy3 = Array.from(array3);

copy3.push(400);

console.log("array3 : ", array3); // [100, {name: "earth"}, 300]
console.log("copy3 : ", copy3); // [100, {name: "earth"}, 300, 400]

// Deep copy
const array4 = [
    1000,
    {
        name: "moon"
    },
    3000
];

const copy4 = JSON.parse(JSON.stringify(array4));

copy4[1].name = "jupiter";

console.log("array4 : ", array4); // [1000, {name: "moon"}, 3000]
console.log("copy4 : ", copy4); // [1000, {name: "jupiter"}, 3000]
