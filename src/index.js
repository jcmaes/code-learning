/* Bubbling and capturing */

import './style.css';

const square = document.querySelector("div");
const span = document.querySelector("span");

square.addEventListener('click', () => {
    console.log('click on square');
}, {
    capture: true
});

span.addEventListener('click', () => {
    console.log('click on span');
}, {
    capture: true
});
