import '../assets/styles/styles.scss';
import './form.scss';

const form = document.querySelector('form');
const errorElement = document.querySelector('#errors');
const buttonCancel = document.querySelector('button[type="button"]');
let errors = [];

buttonCancel.addEventListener('click', () => {
    location.assign('/index.html');
});

form.addEventListener('submit', async event => {
    event.preventDefault();

    const formData= new FormData(form);
    const article = Object.fromEntries(formData.entries());

    if (formIsValid(article)) {
        try {
            const json = JSON.stringify(article);
            const response = await fetch('https://restapi.fr/api/articles', {
                method: "POST",
                body: json,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.status < 299) {
                location.assign('/index.html');
            }
        } catch(e) {
            console.log('e: ', e);
        }
    }
});

const formIsValid = article => {
    errors = [];
    if (
        !article.author ||
        !article.category ||
        !article.content ||
        !article.image ||
        !article.title
    ) {
        errors.push('This field is required');
    } else {
        errors = [];
    }
    if (errors.length) {
        let errorHTML = '';
        errors.forEach(e => {
            errorHTML += `<li>${e}</li>`
        });
        errorElement.innerHTML = errorHTML;
        return false;
    } else {
        errorElement.innerHTML = '';
        return true;
    }
};