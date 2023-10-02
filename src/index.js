/* Attributes and properties */

const p = document.querySelector('p');
const img = document.querySelector('img');
const section = document.querySelector('section');
const a = document.querySelector('a');
const input = document.querySelector('input');

input.focus();

setTimeout( () => {
    input.blur();
}, 1000);

input.type = 'date';

input.value = '123';

input.placeholder = 'Hello';

input.disabled = true;

input.minLength = 5;
input.maxLength = 15;

input.max = '50';

console.log(input.validity);
