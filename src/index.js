console.log(history);

let inputStateValue;
let inputValue;
const input = document.querySelector('#myinput');

if (history.state) {
    inputStateValue = history.state.value;
    inputValue = inputStateValue;
    input.value = inputValue;
}

setInterval(() => {
    const value = input.value;
    if (value !== inputValue) {
        inputValue = value;
        // history.pushState({ input: value}, '');
        history.replaceState({ input: value}, '');
    }
}, 2500);

window.addEventListener('popstate', (event) => {
    console.log(event);
});

console.log(history.state);
