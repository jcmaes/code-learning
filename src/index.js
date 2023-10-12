const date = new Date();

console.log(date.getDate()); // 12
console.log(date.getDay()); // 4
console.log(date.getFullYear()); // 2023
console.log(date.getHours()); // 20
console.log(date.getUTCMinutes()); // 59

// Increment date
const date2 = new Date();
date2.setHours(date2.getHours() + 1);

console.log(date2); // Thu Oct 12 2023 22:02:09 GMT+0200 (Central European Summer Time)
