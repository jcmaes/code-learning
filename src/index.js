/* Delete an event handler and trigger an event */

import './style.css';

const square = document.querySelector("div");
const button = document.querySelector("button");

function becomeRed() {
    square.style.backgroundColor = "red";
}

square.addEventListener('mouseover', becomeRed);

square.addEventListener('mouseout', () => {
    square.style.backgroundColor = "#eee";
    square.removeEventListener('mouseover', becomeRed);
});

button.addEventListener('click', () => {
    square.dispatchEvent(new Event('mouseover'));
});
