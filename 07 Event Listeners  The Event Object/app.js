// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){
//   console.log('Hello world')

//   // e.preventDefault();
// })

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  // console.log('Hi there!')

  let val;

  val = e;

  // event target
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // e.target.innerText = 'Submitting. .';

  // event type
  val = e.type;

  // timestamp
  val = e.timeStamp;

  // coords of the event relative to the window
  val = e.clientY;
  val = e.clientX;

    // coords of the event relative to the element
    val = e.offsetY;
    val = e.offsetX;

  console.log(val);
}
