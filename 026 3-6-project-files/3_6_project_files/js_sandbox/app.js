// create element
const li = document.createElement('li');

// add class
li.className = 'collection-item'

// add id
li.id = 'new-item';

// add attribute
li.setAttribute('title', 'new item')

// create text node and append
li.appendChild(document.createTextNode('Hello wrold'));

// create new link element
const link = document.createElement('a')

// add classes to link
link.className = 'delete-item secondary-content';

// add icon
link.innerHTML = '<i class="fa fa-remove"></li>';

// append link
li.appendChild(link)

//append li as child to ul
document.querySelector('ul.collection').appendChild(li)



console.log(li);
