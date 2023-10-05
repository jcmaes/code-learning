/* First HTTP fetch request */

const promise = fetch('https://jsonplaceholder.typicode.com/users');

// console.log(promise);

// JSON format
// Example 1
promise
    .then(response => {
        console.log(response)
        const promiseUsers = response.json();
        promiseUsers.then( users => {
            console.log(users);
        });
    })
    .catch(error => console.log(error));

// Example 2
promise
    .then(async response => {
        console.log(response);
        try {
            const users = await response.json();
            console.log(users);
        } catch (e) {
            console.log(e);
        }
    })
    .catch(error => console.log(error));

// TEXT format
promise
    .then(async response => {
        console.log(response);
        try {
            const users = await response.text();
            console.log(JSON.parse(users));
        } catch (e) {
            console.log(e);
        }
    })
    .catch(error => console.log(error));
