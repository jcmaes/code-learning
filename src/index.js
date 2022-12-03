/* Iterating on objects */

const obj = {
    a: 'one',
    b: 'two',
    c: 'three'
};

// For ... in
for (prop in obj) {
    console.log(prop);
    console.log(obj[prop]);
}

// Object keys
console.log(Object.keys(obj));

// Object values
console.log(Object.values(obj));

// Object entries
console.log(Object.entries(obj));
