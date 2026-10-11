// Assignment 2: DOM-based To-Do List

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// 1. Add Task using DOM methods (createElement, appendChild)
function addTask() {
  const taskText = taskInput.value.trim();

  // Validate non-empty input
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create list item (li)
  const li = document.createElement('li');
  li.className = 'task-item';

  // Create task text span
  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = taskText;

  // 2. Mark as completed using classList.toggle on click
  span.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  // 3. Create Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'btn-delete';

  // Delete task dynamically from DOM using remove()
  deleteBtn.addEventListener('click', function () {
    li.remove();
  });

  // Assemble elements using appendChild
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input field after adding
  taskInput.value = '';
}

// Allow adding task by pressing Enter key
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
