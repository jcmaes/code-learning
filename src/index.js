/* Todos display */

import './style.css';

const list = document.querySelector("ul");

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

displayTodo();
