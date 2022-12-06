/* Lexical environment and execution context */

// Example 1
function a() {}
function b() {
    a();
}
b();

// Example 2
function c() {
    let text;
}
function d() {
    c();
    let foo;
}
d();
