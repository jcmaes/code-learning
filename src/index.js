// console.log(window.location); // Location {}
// console.log(document.location); // Location {}
console.log(location); // Location {}

const url = new URL(location.href);
console.log(url); // Url {}

// Example with http://localhost:4000/test?sort=asc#myhash
console.log(url.searchParams.get('sort')); // asc

// The same result by another way
const searchParams = new URLSearchParams(location.search);
console.log(searchParams.get('sort')); // asc

setTimeout(() => {
   location.href = '/form.html';
}, 3000);
