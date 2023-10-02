/* Create nodes */

import './style.css';

const app = document.querySelector('#app');

const section = document.createElement("section");

const image = document.createElement("img");
const imageSrc = document.createAttribute("src");
imageSrc.value = "https://picsum.photos/seed/picsum/400/300";

const paragraph = document.createElement("p");
const paragraphClass = document.createAttribute("class");
paragraphClass.value = "text-primary";
const paragraphText = document.createTextNode("I'm a paragraph");

const link = document.createElement("a");
const linkHref = document.createAttribute("href");
linkHref.value = "https://dyma.fr";
const linkText = document.createTextNode("Dyma");

const comment = document.createComment("I am a comment");
