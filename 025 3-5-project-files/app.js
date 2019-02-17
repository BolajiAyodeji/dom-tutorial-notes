let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// get child nodes
val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document
// 10 - Doctype

// get children element nodes
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hello';

// children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];

//first child
val = list.firstChild;
val = list.firstElementChild;

//last child
val = list.lastChild;
val = list.lastElementChild;

//count child elements
val = list.childElementCount;

//get parent node
val = listItem.parentNode;
val = listItem.parentElement
val = listItem.parentElement.parentElement

//get next siblings
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

//get previous siblings
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val)
