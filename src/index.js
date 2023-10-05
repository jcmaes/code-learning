/* Promise methods */

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(2);
        reject(2);
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 3000);
});

// Method all
Promise.all([promise1, promise2, promise3])
    .then ( result => console.log(result)) // [1, 2, 3]
    .catch( error => console.log(error)); // 2

// Method allSettled
Promise.allSettled([promise1, promise2, promise3])
    .then ( result => console.log(result)) // [{...}, {status: rejected}, {...}]
    .catch( error => console.log(error)); // 2

// Method race
Promise.race([promise1, promise2, promise3])
    .then ( result => console.log(result)) // 3
    .catch( error => console.log(error)); // 2

// Method resolve
Promise.resolve(1)
    .then(result => console.log(result)); // 1

// Method reject
Promise.reject(1)
    .then(error => console.log(error)); // error
