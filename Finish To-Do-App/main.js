// const form = document.querySelector('form');
// const ul = document.querySelector('ul');
// const taskNumber = document.querySelector('h1 span');
// const listItems = document.getElementsByClassName('task');
// const input = document.querySelector('input');

// const removeTask = (e) => {
//  e.target.parentNode.remove();
//  taskNumber.textContent = listItems.length;
// }


// const addTask = (e) => {
//  e.preventDefault()
//  const titleTask = input.value;
//  if (titleTask === "") return;
//  const task = document.createElement('li');
//  task.className = 'task';
//  task.innerHTML = titleTask + "<button>Usuń</button>";
//  ul.appendChild(task);
//  input.value = "";
//  // const liItems = document.querySelectorAll('li.task').length;
//  taskNumber.textContent = listItems.length;
//  task.querySelector('button').addEventListener('click', removeTask);

// }
// form.addEventListener('submit', addTask)

const button = document.createElement('button');
document.body.appendChild(button);

const ourNewObject = document.createElement('div');
document.body.appendChild(ourNewObject);

ourNewObject.textContent = 0;
ourNewObject.style.fontSize = "55px"

button.style.width = "50px";
button.style.height = "20px";
button.textContent = 'Click';


const incrementation = () => {
    ourNewObject.textContent++;
}

window.addEventListener('click', incrementation);



// const ourNewObject = document.createElement('div');
// document.body.appendChild(ourNewObject);