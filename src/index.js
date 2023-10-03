/* Add todo */

import './style.css';

const list = document.querySelector("ul");
const form = document.querySelector("form");
const input = document.querySelector("form > input");

console.log(form, input);

form.addEventListener('submit', event => {
    event.preventDefault();
    const value = input.value;
    input.value = '';
    addTodo(value);
    displayTodo();
});

const todos = [
    {
        text: 'i am a todo list',
        done: false
    },
    {
        text: 'do JavaScript',
        done: true
    }
];

const displayTodo = () => {
    const todosNode = todos.map((todo, index) => {
        return createTodoElement(todo, index);
    });
    list.innerHTML = '';
    list.append(...todosNode);
};

const createTodoElement = (todo, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span class="todo ${todo.done ? 'done': ''}"></span>
        <p>${todo.text}</p>
        <button>Supprimer</button>
    `;
    return listItem;
};

const addTodo = (text) => {
    todo.push({
       text,
       done: false
    });
}

displayTodo();
