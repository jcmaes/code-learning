/* Arrow functions */

// Example 1
const cb = () => {
    console.log("cb");
}

const b = () => {
    console.log("b");
}

function fn(a, cb) {
    console.log("a : ", a);
    cb();
}

fn("This is a ", cb); // a : This is a // cb
fn("This is a ", b); // a : This is a // b

// Example 2
const d = (p1, p2) => {
    console.log("cb", p1, p2);
}

function fn2(a, cb) {
    console.log("a : ", a);
    const p1 = 1;
    const p2 = 2;
    cb(p1, p2);
}

fn2("This is a ", d); // a : This is a // cb 1 2