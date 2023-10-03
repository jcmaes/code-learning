/* Using on* DOM properties */

import './style.css';

const square = document.querySelector("div");

square.onmouseover = () => {
    square.style.backgroundColor = 'red';
};

// square.onmouseover = null;

square.onmouseout = () => {
    square.style.backgroundColor = '#eee';
};
