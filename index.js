console.log('My code is running');
// Create an empty array to hold the tasks
// Create an empty array to hold the tasks
let todoList = []; //create an empty array to hold the tasks

function addTask(task) {
  todoList.push(task); //push the task to the todoList array
  const taskListElement = document.getElementById('task-list');
  const newTaskElement = document.createElement('li');

  const checkbox = document.createElement('input');// checkbox for marking tasks as completed
  checkbox.type = 'checkbox';
  checkbox.classList.add('task-checkbox');

  const taskText = document.createElement('span');// text element for the task description
  taskText.textContent = task;

  const deleteButton = document.createElement('button');// create a delete button for each task
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');

  deleteButton.addEventListener('click', function(event) {// Delete task when delete button is clicked
    event.stopPropagation();  // Prevent the task click event from firing
    const index = todoList.indexOf(task);
    if (index > -1) {
      todoList.splice(index, 1);  // Remove the task from the array
      taskListElement.removeChild(newTaskElement);  // Remove the task from the DOM
    }
  });

  // Add an event listener to toggle the "completed" class when checkbox is clicked
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      taskText.classList.add('completed');
    } else {
      taskText.classList.remove('completed');
    }
  });

  // Append the checkbox, task text, and delete button to the new task element
  newTaskElement.appendChild(checkbox);
  newTaskElement.appendChild(taskText);
  newTaskElement.appendChild(deleteButton);

  // Add the new task to the UL (task list) element
  taskListElement.appendChild(newTaskElement);
}

// Event listener for the "Add Task" button
document.getElementById('add-task-button').addEventListener('click', function(event) {
  // Prevent any default form behavior like page reload (if the button is inside a form)
  event.preventDefault();

  const taskInput = document.getElementById('task-input');
  const task = taskInput.value.trim();  // Get the task from the input field

  if (task !== "") {  // Only add if there's text
    addTask(task);  // Call the addTask function
    taskInput.value = "";  // Clear the input field after adding the task
  }
});

// Optional: Allow pressing Enter to add a task
document.getElementById('task-input').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();
    if (task !== "") {
      addTask(task);
      taskInput.value = "";  // Clear input after adding task
    }
  }
});