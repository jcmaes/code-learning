/* Copy object */

const a = {
    name: 'Toto',
    foo: {
        bar: 'zoo'
    }
};

// Examples shallow
const b = Object.assign({}, a);
const c = { ...a };
b.name = "Tata";

console.log(a);
console.log(b);
console.log(c);

// Example deep
const d = JSON.parse(JSON.stringify(a));

console.log(d);
