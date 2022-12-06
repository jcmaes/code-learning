/* Function expressions and their declaration */

// Declaration of a function
function func() {
    console.log("func exec");
}
func();

// Expression of a function
const fn = function func2() {
    console.log("func2 exec");
}

console.log(fn.name); // func2
fn();

// Anonymous function
const fn2 = function () {
    console.log("func2 exec");
}

console.log(fn2.name); // fn2
fn2();
