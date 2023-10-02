/* Delete and replace nodes */

import './style.css';

const p = document.querySelector(".text-primary");
console.log(p);

// Methode remove
p.parentElement.removeChild(p);
p.remove();

const span = document.createElement('span');
span.innerHTML = "<h1>Hello</h1>";

// Methode replace
p.parentElement.replaceChild(span ,p);
p.replaceWith(span);