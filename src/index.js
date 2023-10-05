/* Cancel current queries */

const controller = new AbortController();

console.log(controller);

controller.signal.addEventListener('abort', (event) => {
    console.log(event);
});

controller.abort();

const promise = fetch('https://jsonplaceholder.typicode.com/users', {
    signal: controller.signal
});

promise
    .then(response => console.log(response))
    .catch(e => console.log(e));
