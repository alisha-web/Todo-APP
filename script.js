const inputField = document.querySelector('.todoInput');
const addTaskButton = document.querySelector('.addTaskBtn');
const taskContainer = document.querySelector('.taskList');
const clearAllButton = document.querySelector('.clearAllBtn');

addTaskButton.addEventListener('click', function () {
    const taskText = inputField.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskItem = document.createElement('div');
    taskItem.classList.add('taskItem');
    
    const taskTextElement = document.createElement('p');
    taskTextElement.classList.add('taskText');
    taskTextElement.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.classList.add('editTaskBtn');
    editButton.textContent = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteTaskBtn');
    deleteButton.textContent = 'Delete';

    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    taskContainer.appendChild(taskItem);

    inputField.value = '';

    editButton.addEventListener('click', function () {
        const newTask = prompt('Edit task', taskTextElement.textContent);
        if (newTask) {
            taskTextElement.textContent = newTask;
        }
    });

    deleteButton.addEventListener('click', function () {
        taskContainer.removeChild(taskItem);
    });
});

clearAllButton.addEventListener('click', function () {
    taskContainer.innerHTML = '';
});
