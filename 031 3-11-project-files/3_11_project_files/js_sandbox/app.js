// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click',
// function() {
//   console.log('card-title')
// });

// document.querySelector('.card-content').addEventListener('click',
// function() {
//   console.log('card-content')
// });

// document.querySelector('.card').addEventListener('click',
// function() {
//   console.log('card')
// });

// document.querySelector('.col).addEventListener('click',
// function() {
//   console.log('col')
// });

// EVENT DELEGATION

// const deleteItem = document.querySelector('.delete-item');
// deleteItem.addEventListener('click', delItem)

// document.body.addEventListener('click', delItem)
// function delItem(e) {
//   if(e.target.parentElement.className === 'delete-item secondary-content'){
//     console.log('delete item')
//   }
// }

document.body.addEventListener('click', delItem)
function delItem(e) {
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item')
    e.target.parentElement.parentElement.remove();
  }
}
