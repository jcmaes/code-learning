/* Chain promises */

// Example 1
const promise = new Promise((resolve, reject) => {
    // resolve("promise ok !");
    // reject("promise nok !");
    setTimeout(() => {
        // resolve("timeout ok !");
        reject("promise nok !");
    }, 2000);
});

promise
    .then(response => {
        console.log('then 1:', response); // then 1: timeout ok !
        throw new Error('error');
        // return "new value";
    },
    // Old school way
    // Handle errors directly in then
    error => {
        console.log("error");
    })
    .then(response => {
        console.log('then 2:', response); // then 2: new value
        return "another new value";
    })
    .catch(error => {
        console.log('error :', error);
    })
    .then(response => {
        console.log('then 3:', response); // then 3: another new value
    })
    .catch(error => {
        console.log('error 2:', error);
    });

// promise.then(response => {
//     console.log('then 2 :', response)
// })

console.log("I am ok !");

// Methode finally
promise
    .then(response => {
        console.log("then: ", response);
    })
    .catch(error => {
        console.log("error :", error);
    })
    .finally(() => {
        console.log("in finally");
    });
