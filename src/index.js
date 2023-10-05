/* XMLHttpRequest */

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
xhr2.responseType = 'json';
xhr2.setRequestHeader('Content-type', 'application/json')
xhr2.send();

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