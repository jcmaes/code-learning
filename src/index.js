/* Sort an array */

const a = [2, 1, 3];

a.sort();
a.sort((param1, param2) => param1.localeCompare(param2));
a.sort((param1, param2) => param1.localeCompare(param2) * -1);

console.log(a); // [1, 2, 3];

const b = [2, 25, 100]; // "2", "25", "100";

b.sort();

console.log(b); // [100,  2, 25];

const c = ["banana", "Orange", "apple"];

c.sort();

console.log(c); // ["Orange",  "apple", "banana"];

const d = [
    {
        quantity: 10
    },
    {
        quantity: 15
    },
    {
        quantity: 5
    }
]

d.sort((param1, param2) => param1.quantity - param2.quantity);

console.log(d); // [{quantity: 5}, {quantity: 10}, {quantity: 15}];

const e = [1, 2, 3]

e.reverse();
console.log(e); // [3, 2, 1];
