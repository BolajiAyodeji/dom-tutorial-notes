// REPLACE

// create element
const newHeading = document.createElement('h2')

// add id
newHeading.id = 'task-title';

// new text node
newHeading.appendChild(document.createTextNode('Task-List'));

// get old heading
const oldHeading = document.getElementById('task-title');

// parent
const cardAction = document.querySelector('.card-action');

// replace
cardAction.replaceChild(newHeading, oldHeading)


// REMOVE
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove list item
lis[0].remove();

// remove child element
list.removeChild(lis[3]);

// CLASSES & ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test')
link.classList.remove('test')

val = link

// attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com');
link.setAttribute('src', 'img/logo.png')
val = link.hasAttribute('src')
link.removeAttribute('src')

console.log(val)
