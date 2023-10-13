import './assets/styles/styles.scss';
import './index.scss';

const articleContainerElement = document.querySelector('.article-container');
const categoriesContainerElement = document.querySelector('.categories');

const createArticles = articles => {
    const articlesDOM = articles.map(article => {
        const articleDom = document.createElement('div');
        articleDom.classList.add('article');
        articleDom.innerHTML = `
<img src="${article.image}" alt="profile">
<h2>${article.title}</h2>
<p class="article-author">${article.author} - ${new Date(article.createdAt).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
})}</p>
<p class="article-content">${article.content}</p>
<div class="article-actions">
    <button class="btn btn-danger" data-id="${article._id}">Delete</button>
    <button class="btn btn-primary" data-id="${article._id}">Edit</button>
</div>
`;
        return articleDom;
    });
    articleContainerElement.innerHTML = '';
    articleContainerElement.append(...articlesDOM);
    const deleteButtons = articleContainerElement.querySelectorAll('.btn-danger');
    const editButtons = articleContainerElement.querySelectorAll('.btn-primary');
    editButtons.forEach(button => {
        button.addEventListener('click', event => {
            const target = event.target;
            const articleId = target.dataset.id;
            window.location.assign(`/form.html?id=${articleId}`);
        });
    });
    deleteButtons.forEach( button => {
        button.addEventListener('click', async event => {
            try {
                const target = event.target;
                const articleId = target.dataset.id;
                const response = await fetch(`https://restapi.fr/api/articles/${articleId}`, {
                    method: "DELETE"
                });
                const body = await response.json();
                console.log(body);
                fetchArticle();
            } catch (e) {
                console.log('e: ', e);
            }
        });
    });
};

const displayMenuCategories = (categoriesArray) => {
    const liElement = categoriesArray.map(categoryElem => {
       const li = document.createElement('li');
       li.innerHTML = `<li>${categoryElem[0]} (<strong>${categoryElem[1]}</strong>)</li>`;
       return li;
    });
    categoriesContainerElement.innerHTML = '';
    categoriesContainerElement.append(...liElement);
    console.log(liElement);
};

const createMenuCategories = (articles) => {
    const categories = articles.reduce((acc, article) => {
        if (acc[article.category]) {
            acc[article.category]++
        } else {
            acc[article.category] = 1;
        }
        return acc;
    }, {});

    const categoriesArray = Object.keys(categories).map((category) => {
        return [category, categories[category]];
    });
    // console.log(categoriesArray);
    displayMenuCategories(categoriesArray);
};

const fetchArticle = async () => {
    try {
        const response = await fetch("https://restapi.fr/api/articles");
        const articles = await response.json();
        createArticles(articles);
        createMenuCategories(articles);
    } catch (e) {
        console.log("e:", e);
    }
};

 fetchArticle();
