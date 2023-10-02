/* Positioning nodes */

import './style.css';

const app = document.querySelector('#app');

const section = document.createElement("section");

const image = document.createElement("img");
const imageSrc = document.createAttribute("src");
imageSrc.value = "https://picsum.photos/seed/picsum/400/300";

image.setAttributeNode(imageSrc);

const paragraph = document.createElement("p");
const paragraphClass = document.createAttribute("class");
paragraphClass.value = "text-primary";
const paragraphText = document.createTextNode("I'm a paragraph");

paragraph.setAttributeNode(paragraphClass);

const link = document.createElement("a");
const linkHref = document.createAttribute("href");
linkHref.value = "https://dyma.fr";
const linkText = document.createTextNode("Dyma");

link.setAttributeNode(linkHref);

const comment = document.createComment("I am a comment");

app.appendChild(section);
section.append(image);
paragraph.append(paragraphText, link);
link.appendChild(linkText);

paragraph.insertBefore(comment, link);

section.insertAdjacentElement("beforeend", paragraph);
