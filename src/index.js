/* Introduction to functional programming */

const array1 = ['ONE', 'TWO', 'THREE'];

// Old way
const a = [];

array1.forEach((value) => {
    a.push(value.toLowerCase());
});

console.log(a); // ['one', 'two', 'three']

// New way
// Example 1
const array2 = ['ONE', 'TWO', 'THREE'];

const b = array2.map((value) => value.toLowerCase());

console.log(b); // ['one', 'two', 'three']

// Example 2
const array3 = [{
    quantity: 5,
    name: 'shoes'
}, {
    quantity: 10,
    name: 'hats'
}];

const c = array3.map((value) => value.name);

console.log(c); // ['shoes', 'hats']

// Methode filter
const array4 = [{
    quantity: 5,
    name: 'PANTS'
}, {
    quantity: 10,
    name: 'GLOVES'
}, {
    quantity: 15,
    name: 'SHIRTS'
}];

const d = array4
    .filter((item) => item.quantity >=10)
    .map(item => {
        return {
            ...item,
            name: item.name.toLowerCase()
        }
    });

console.log(d); // {0: {"quantity": 10, "name": "gloves"} 1: {"quantity": 15, "name": "shirts"}
