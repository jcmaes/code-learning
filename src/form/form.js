import '../assets/styles/styles.scss';
import './form.scss';

const form = document.querySelector('form');
const errorElement = document.querySelector('#errors');
const buttonCancel = document.querySelector('.btn-secondary');
let errors = [];
let articleId;

const initForm = async () => {
    const params = new URL(window.location.href);
    articleId = params.searchParams.get('id');
    // console.log(articleId);

    if (articleId) {
        const response = await fetch(`https://restapi.fr/api/articles/${articleId}`);
        if (response < 300) {
            const article = await response.json();
            // console.log(article);
            fillForm(article);
        }
    }
};

initForm();

const fillForm = article => {
    const author = document.querySelector('input[name="author"]');
    const image = document.querySelector('input[name="image"]');
    const category = document.querySelector('input[name="category"]');
    const title = document.querySelector('input[name="title"]');
    const content = document.querySelector('textarea');
    author.value = article.author || '';
    image.value = article.image || '';
    category.value = article.category || '';
    title.value = article.title || '';
    content.value = article.content || '';
};

buttonCancel.addEventListener('click', () => {
    window.location.assign('/index.html');
});

form.addEventListener('submit', async event => {
    event.preventDefault();

    const formData= new FormData(form);
    const article = Object.fromEntries(formData.entries());

    if (formIsValid(article)) {
        try {
            const json = JSON.stringify(article);
            let response;
            if (articleId) {
                response = await fetch(`https://restapi.fr/api/articles/${articleId}`, {
                    method: "PATCH",
                    body: json,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            } else {
                response = await fetch('https://restapi.fr/api/articles', {
                    method: "POST",
                    body: json,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }

            if (response.status < 299) {
                window.location.assign('/index.html');
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
