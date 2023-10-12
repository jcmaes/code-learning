const date = new Date();

/*
console.log(date); // Thu Oct 12 2023 21:10:07 GMT+0200 (Central European Summer Time)
console.log(date.toDateString()); // Thu Oct 12 2023
console.log(date.toTimeString()); // 2021:10:07 GMT+0200 (Central European Summer Time)
console.log(date.toLocaleDateString()); // 10/12/2023
console.log(date.toLocaleDateString('fr-FR')); // 12/10/2023
console.log(date.toLocaleString('fr-FR')); // 12/10/2023 à 21:10:07
*/

console.log(date.toLocaleDateString('fr-FR', {
    weekday: "long",
    month: "long",
    day: "2-digit",
    year: "2-digit"
})); // jeudi 12 octobre 23
