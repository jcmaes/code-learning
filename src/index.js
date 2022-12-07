/* Arrow functions */

// Example 1
const a = (param) => {
    console.log(param);
}

a(); // Undefined
a("foo"); // foo

// Example 2
const b = (c, d) => c + d;
console.log(b(1, 2)); // 3

// Example 3
const e = (f, g) => ({
    f,
    g,
    total: f + g
});
console.log(e(2, 3)); // 5

// Example 4
const h = () => {
    console.log(this); // {} => global object
};

h();

const i = {
    foo: "bar"
}

h.call(i); // {} => global object

// Example 5
/* Arrow functions */
const j = {
    foo: "bar",
    fn: () => {
        console.log(this); // {} => global object
    }
}

j.fn(); // {} => global object

/* Not arrow functions */
const k = {
    foo: "bar",
    fn() {
        const fn2 = () => {
            console.log(this); // {} => global object
        };
        // console.log(this); // {} => global object
        fn2();
    }
}

k.fn(); // {foo: "bar", fn: f} => global object
