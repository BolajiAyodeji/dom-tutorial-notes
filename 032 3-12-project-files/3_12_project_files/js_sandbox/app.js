//set local storage item
// localStorage.setItem('name', 'Jhon');
// localStorage.setItem('age', '30');

//set session storage
// sessionStorage.setItem('name', 'beth');

//remove from storage
// localStorage.removeItem('name');
// sessionStorage.removeItem('name');

//get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

// //clear local storage
// localStorage.clear();

document.querySelector('form').addEventListener('submit',
function(e) {
  const task = document.getElementById('task').value;

  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('task saved!')

  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(task => {
  console.log(task);
});
