/* Edit DOM elements */

const p = document.querySelector('p');
const img = document.querySelector('img');
const section = document.querySelector('section');
const a = document.querySelector('a');
const input = document.querySelector('input');

// console.log(p.childNodes);

// Technical methode
p.childNodes[0].nodeValue = "HelloWorld";

// Generic methode
// p.innerTEXT = "<strong>Hello</strong>";
p.innerHTML += " <strong>Hello</strong>";

// Image
// console.log(img.attributes);

img.src = "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/csit/2019/07/9608c9ff.png";
img.alt = "Welcome"

// Link
a.href = "https://www.google.com/";
