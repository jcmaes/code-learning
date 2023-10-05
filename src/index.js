/* Advanced XMLHttpRequest uses */

// Method GET
const xhr = new XMLHttpRequest();

xhr.open("GET", 'https://jsonplaholder.typicode.com/todos');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('load', response => {
    console.log(response);
    const result = xhr.response;
    console.log(xhr.response);
});

xhr.addEventListener('error', error => {
    console.log(error);
});

xhr.addEventListener('progress', progress => {
    console.log(progress);
});

// Method POST
const todo = {
    userId: 1000,
    title: "hello",
    complete: false
}
const xhr2 = new XMLHttpRequest();

xhr2.open("POST", 'https://jsonplaholder.typicode.com/todos');
xhr2.timeout = 1000;
xhr2.responseType = 'json';
xhr2.setRequestHeader('Content-type', 'application/json')
xhr2.send(JSON.stringify(todo));

// xhr2.addEventListener('abort', event => console.log(event));
// xhr2.abort();

xhr2.addEventListener('timeout', event => console.log(event));

xhr2.addEventListener('load', response => {
    console.log(response);
    console.log(xhr2);
    const result = xhr2.response;
    console.log(xhr2.response);
});

xhr2.addEventListener('error', error => {
    console.log(error);
});

xhr2.addEventListener('progress', progress => {
    console.log(progress);
});

xhr2.addEventListener('readystatechange', event => {
    console.log(event);
    console.log(xhr2.readyState);
});

// Progress
const xhr3 = new XMLHttpRequest();
const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);

    xhr3.open("POST", 'https://restapi.fr/upload');

    xhr3.upload.addEventListener('loadstart', () => console.log('load started'));
    xhr3.upload.addEventListener('progress', event => {
        console.log(event);
        const percentage = ((event.loaded / event.total) * 100).toFixed(0);
        console.log(percentage, '%');
    });
    xhr3.upload.addEventListener('loadend', () => console.log('load ended'));
    xhr3.upload.addEventListener('error', () => console.log('error'));

    xhr3.send(formData);
});
