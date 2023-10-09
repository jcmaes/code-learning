import './assets/styles/styles.scss';
import './index.scss';

const articleContainerElement = document.querySelector('.article-container');

const createArticles = (articles) => {
  const articlesDOM = articles.map(article => {
     const articleDom = document.createElement('div');
     articleDom.classList.add('article');
     articleDom.innerHTML = `
<img src="${article.image}" alt="profile">
<h2>${article.title}</h2>
<p class="article-author">${article.author} - ${article.category}</p>
<p class="article-content">${article.content}</p>
<div class="article-actions">
    <button class="btn btn-danger" data-id="${article._id}">Delete</button>
</div>
`;
     return articleDom;
  });
    // console.log(articlesDOM);
    articleContainerElement.innerHTML = '';
    articleContainerElement.append(...articlesDOM);
};
const fetchArticle = async () => {
    try {
        const response = await fetch("https://restapi.fr/api/articles");
        const articles = await response.json();
        console.log(articles);
        createArticles(articles);
    } catch (e) {
        console.log("e:", e);
    }
}

fetchArticle();
