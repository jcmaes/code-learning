/* Introduction to asynchronous and timers */

// Timeout
const timeoutId = setTimeout(() => {
    console.log('timer done');
}, 3000);

console.log(timeoutId);

clearTimeout(timeoutId);

// Interval
let index = 0;
const intervalId = setInterval(() => {
    console.log('interval done');
    index++;
    if (index === 3) {
        clearInterval(intervalId);
    }
}, 1000);

console.log(intervalId);

