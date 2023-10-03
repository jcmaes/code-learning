/* Prevent default behavior and event object in detail */

import './style.css';

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener('click', (event) => {
    console.log('click form');
});

input.addEventListener('click', (event) => {
    console.log('click input');
    event.stopPropagation();
});
