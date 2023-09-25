/* Find elements in an array */

const array = ["one", "two", "three"];

console.log(array.indexOf("two")) // 1
console.log(array[array.indexOf("two")]) // two

console.log(array.includes("two")) // true

const array2 = [
    {
        name: "earth"
    },
    {
        name: "moon"
    },
    {
        name: "sun"
    }
];

const index = array2.findIndex(elem => elem.name === "sun");
console.log(index); // 2

const elem = array2.find(elem => elem.name === "sun");
console.log(elem); // {name: "sun"}
