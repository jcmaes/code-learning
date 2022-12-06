/* The stock chain */

// Example 1
function a() {
    console.log(foo);
}
function b() {
    let foo = 1;
    a();
}

let foo = 2;
b();

// Example 2
function d() {
    function c() {
        console.log(bar);
    }
    let bar = 1;
    c();
}

let bar = 2;
d();