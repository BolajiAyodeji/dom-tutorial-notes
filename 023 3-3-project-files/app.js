// let val;

// val = document.all[2];
// val = document.forms
// val = document.scripts[0].getAttribute('src')

// let scripts = document.querySelectorAll('li');

// let arr = Array.from(scripts)

// arr.forEach(script => {
//   console.log(scripts);
// });

// console.log(val);

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li:nth-child(5)').style.color = 'red'

// document.querySelector('li:nth-child(odd)').style.background = '#ccc'
// document.querySelector('li:nth-child(even)').style.background = 'purple'

// let lis = document.getElementsByTagName('li')
// lis = Array.from(lis)

// lis.forEach(li => {
//   console.log(li.className)
// })

const items = document.querySelectorAll('li')

items.forEach((item, index) =>{
item.textContent = `${index} : hello`;
})

const odd = document.querySelectorAll('li:nth-child(odd)');
const even = document.querySelectorAll('li:nth-child(even)');

odd.forEach((li, index) =>{
  li.style.background = '#ddd'
})

even.forEach((li, index) => {
  li.style.background = '#eee'
})
