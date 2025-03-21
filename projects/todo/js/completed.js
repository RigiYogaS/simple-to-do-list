window.onload = function() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(function(task) {
        if (task.completed) { 
            addTaskToDOM(task);
        }
    });
}

function addTaskToDOM(task) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('flex', 'items-center',  'bg-green-200', 'space-x-4', 'border', 'border-green-300', 'rounded-md', 'p-4', 'cursor-pointer', 'my-4', 'w-full' );

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('mr-4');
    checkbox.checked = task.completed; 

    const taskText = document.createElement('span');
    taskText.classList.add('flex-grow');
    taskText.innerHTML = `<strong>${task.name}</strong> - ${task.desc} <br><small class="text-sm text-gray-500">Type: ${task.type}, Deadline: ${task.deadline}</small>`;

    taskItem.appendChild(taskText);

    document.getElementById('taskList').appendChild(taskItem);
}