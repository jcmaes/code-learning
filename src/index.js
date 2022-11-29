/* Regular expressions */

const a = "This is the 645sun";
// const evaluate = /sun/.test(a); // true
// const evaluate = /\d{1,3}s/.test(a); // true
// const evaluate = /\Ds/.test(a); // true
// const evaluate = / .\d{1,3}/.test(a); // true
// const evaluate = /[le]\d/.test(a); // false
// const evaluate = /[^le] \d/.test(a); // false
// const evaluate = /[a-z]/.test(a); // true
const evaluate = /\d{3}[A-Z]?[a-z]/.test(a); // true
console.log(evaluate);

const b = "picture_13456.jpg";
const newEvaluate = /(.*)\./.exec(b);
console.log(newEvaluate);

b.match(/.*\./);
b.split(/.*\./);
