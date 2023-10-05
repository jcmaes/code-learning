/* Event loop */

// Example 1
console.log("start");

setTimeout(() => console.log("timout 2000"), 2000);

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 4000);
})

promise.then(() => {
    console.log("promise 4000");
});

Promise.resolve().then(() => {
    console.log("promise 0");
});

setTimeout(() => {
    console.log("timeout 0");
}, 0);

console.log("end");

// Result
// start - end - promise 0 - timout 0
