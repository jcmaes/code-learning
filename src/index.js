/* Numbers */

console.log(Number("44")); // 44
console.log(Number("44px")); // NaN
console.log(+"43"); // 43
console.log(1 + "43"); // 143 -> string
console.log(1 + +"43"); // 44

console.log(parseInt("45")); //45
console.log(parseInt("45px")); // 45

console.log(parseInt("11", 2)); // 3
console.log(parseInt("11.55")); // 11

console.log(parseFloat("11.55")); // 11.55
console.log(parseFloat("12")); // 12

