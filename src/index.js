/* Select DOM elements */

console.log(document);
console.log(window);

// Old way
const elem1 = document.getElementById('foo');
console.log(elem1) // <img>

const elem2 = document.getElementsByClassName('class-test');
console.log(elem2) // <p>

// New way
const elem3 = document.querySelector('section')
console.log(elem3) // <section>

const elem4 = document.querySelectorAll('img')
console.log(elem4) // <img>
