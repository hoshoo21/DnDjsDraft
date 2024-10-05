
  
  
  // Import tasks and columns from separate modules
import { tasks, createTaskElement } from './tasks.js';
import { columns, createColumnElement } from './columns.js';

document.addEventListener('DOMContentLoaded', () => {
  const board = document.querySelector('.board');

  // Create and append columns
  columns.forEach(column => {
    const columnElement = createColumnElement(column);
    board.appendChild(columnElement);
  });

  // Create and append tasks to the first column as an example
  const todoColumn = document.getElementById('todoColumn');
  tasks.forEach(task => {
    const taskElement = createTaskElement(task);
    todoColumn.appendChild(taskElement);
  });

  // Now handle drag and drop
  setupDragAndDrop();
});

function setupDragAndDrop() {
  const tasks = document.querySelectorAll('.task');
  const columns = document.querySelectorAll('.column');

  tasks.forEach(task => {
    task.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', task.id);
    });
  });

  columns.forEach(column => {
    column.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    column.addEventListener('drop', (e) => {
      e.preventDefault();
     
      const taskId = e.dataTransfer.getData('text');
      const task = document.getElementById(taskId);
      task.style.backgroundColor=column.getAttribute('data-taskbgcolor');
      if (task) {
        column.appendChild(task);
      }
    });
  });
}
