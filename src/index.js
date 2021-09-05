document.addEventListener("DOMContentLoaded", () => {
  // grab form, add event listener w/ a submit event
    // add a prevent default
    // event listener will point to an external function to append task to DOM

  // createTask function createst list element
    // list's text content = passed in text from event handler
    // append's list to UL


  function createTask (task) {
    let li = document.createElement('li')
    let btn = document.createElement('button')
    btn.addEventListener('click', deleteTask)
    btn.textContent = 'Done!'
    li.textContent = task + ' ';
    li.appendChild(btn);
    document.getElementById('tasks').appendChild(li);
  }

  function deleteTask (e) {
    e.target.parentNode.remove()
  }


  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const textBox = document.getElementById('new-task-description');
    createTask(textBox.value);
    document.querySelector('form').reset();
  })

});
