/* AddEventListener() method */

import './style.css';

const square = document.querySelector("div");

square.addEventListener('mouseover', () => {
    square.style.backgroundColor = "red";
}, {
    once: true
});

square.addEventListener('mouseover', () => {
    square.style.width = "300px";
    square.style.height = "300px";
});

square.addEventListener('mouseout', () => {
    square.style.backgroundColor = "#eee";
});

square.addEventListener('mouseout', () => {
    square.style.width = "200px";
    square.style.height = "200px";
});
