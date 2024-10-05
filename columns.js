export const columns = [
    { id: 'todoColumn', name: 'To Do' , classAttr : "pending-column",  classSelector:"column" , taskColor:"#9FA6B2"},
    { id: 'inProgressColumn', name: 'In Progress', classAttr : "inprogress-column",  classSelector:"column", taskColor:"#54B4D3" },
    { id: 'comppletedcolumn', name: 'Completed', classAttr : "completed-column",  classSelector:"column", taskColor:"#14A44D"     }
    
];
  
  // Function to create a DOM element for a column
  export function createColumnElement(column) {
    const columnDiv = document.createElement('div');

    
    columnDiv.classList.add(column.classAttr);
    columnDiv.classList.add(column.classSelector);
    columnDiv.setAttribute('data-taskbgcolor', column.taskColor);

    columnDiv.setAttribute('id', column.id);

  
    const columnTitle = document.createElement('h2');
    columnTitle.textContent = column.name;
    columnDiv.appendChild(columnTitle);
  
    return columnDiv;
  }