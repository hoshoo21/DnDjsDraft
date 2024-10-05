// Export the task-related logic or data
export const tasks = [
    { id: 'task1', text: 'Task 1' },
    { id: 'task2', text: 'Task 2' },
    { id: 'task3', text: 'Task 3' }
  ];
  
  // A function to create a DOM element for a task
  export function createTaskElement(task) {
    const taskDiv = document.createElement('div');
   
    taskDiv.classList.add('task');
    taskDiv.setAttribute('draggable', 'true');
    taskDiv.setAttribute('id', task.id);
    taskDiv.textContent = task.text;
    return taskDiv;
  }
  