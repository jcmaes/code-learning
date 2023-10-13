import './assets/styles/styles.scss';
import './index.scss';

const articleContainerElement = document.querySelector('.article-container');
const categoriesContainerElement = document.querySelector('.categories');
let filter;
let articles;

const createArticles = () => {
    const articlesDOM = articles
        .filter((article) => {
            if (filter) {
                return article.category === filter
            } else {
                return true;
            }
        })
        .map(article => {
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
    const liElements = categoriesArray.map(categoryElem => {
       const li = document.createElement('li');
       li.innerHTML = `<li>${categoryElem[0]} (<strong>${categoryElem[1]}</strong>)</li>`;
       li.addEventListener('click', () => {
           if (filter === categoryElem[0]) {
                filter = null;
                li.classList.remove('active');
               createArticles();
           } else {
               filter = categoryElem[0];
               liElements.forEach(li => {
                   li.classList.remove('active');
               });
               li.classList.add('active');
               createArticles();
           }
       });
       return li;
    });
    categoriesContainerElement.innerHTML = '';
    categoriesContainerElement.append(...liElements);
    console.log(liElements);
};

const createMenuCategories = () => {
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
    }).sort((c1, c2) => c1[0].localeCompare(c2[0]));
    // console.log(categoriesArray);
    displayMenuCategories(categoriesArray);
};

const fetchArticle = async () => {
    try {
        const response = await fetch("https://restapi.fr/api/articles");
        articles = await response.json();
        createArticles();
        createMenuCategories();
    } catch (e) {
        console.log("e:", e);
    }
};

 fetchArticle();
