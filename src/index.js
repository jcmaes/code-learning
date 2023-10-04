/* Promises */

// Example 1
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise ok !");
        reject("promise nok !");
    }, 2000);
});

promise
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });

console.log("I am ok !");
