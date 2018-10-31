
document.addEventListener("DOMContentLoaded", () => {
  console.log('DOM HAS LOADED')
})
//-------------------create new element & pull input from html form-----------------

const form1 = document.getElementById('create-task-form');
form1.addEventListener('submit', function(event){ document.getElementById('newElement');
const newEl = document.getElementById('tasks').appendChild(document.createElement('li'));
newEl.id = 'newElement';
newElement.innerHTML = document.getElementById('new-task-description').value;
event.target.reset()

//-------Create Button & append text-----------------------------------------------

const btn = document.getElementById('newElement').appendChild(document.createElement('button'));
btn.id = 'new button';
txt = document.createTextNode("Delete");
btn.appendChild(txt);

//---------------Assign delete action to button------------------------------------

btn.addEventListener('click', function(event) {
  newElement.remove()
});

event.preventDefault();

})
