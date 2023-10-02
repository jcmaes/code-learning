/* Style and class modification */

import './style.css';

const p = document.querySelector('p');
const img = document.querySelector('img');
const section = document.querySelector('section');
const a = document.querySelector('a');
const input = document.querySelector('input');

// Example 1: Add style in JS
// Simple example
section.style.width = "200px";

console.log(section.style); // CSSStyleDeclaration

// Example param with coma is wright in CamelCase
section.style.backgroundColor = "lightgray";

console.log(window.getComputedStyle(section)); // CSSStyleDeclaration

// Example 2: Add class
console.log(section.className);
console.log(section.getAttribute('class'));

section.className = "red text-primary";

console.log(section.classList); // DOMTokenList(2)

section.classList.add("red");
section.classList.remove("test");

setTimeout(() => {
    section.classList.toggle("red");
    console.log(section.classList.contains('red')); // false
}, 2000);

setTimeout(() => {
    section.classList.toggle("red");
    console.log(section.classList.contains('red')); // true;
}, 4000);


