document.getElementById('taskForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const taskName = document.getElementById('taskName').value;
    const taskDesc = document.getElementById('taskDesc').value;
    const taskType = document.getElementById('taskType').value;
    const taskDeadline = document.getElementById('taskDeadline').value;

    if (taskName === '' || taskDesc === '' || taskDeadline === '') {
        alert('Please fill in all required fields!');
        return;
    }

    const task = {
        name: taskName,
        desc: taskDesc,
        type: taskType,
        deadline: taskDeadline,
        completed: false 
    };

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    addTaskToDOM(task);
    
    document.getElementById('taskForm').reset();
});

window.onload = function() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(function(task) {
        addTaskToDOM(task);
    });
}

function addTaskToDOM(task) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('flex', 'items-center', 'space-x-4', 'border', 'border-gray-300', 'rounded-md', 'p-4', 'cursor-pointer', 'mb-4', 'w-full');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('mr-4');
    checkbox.checked = task.completed;

    const taskText = document.createElement('span');
    taskText.classList.add('flex-grow');
    taskText.innerHTML = `<strong>${task.name}</strong> - ${task.desc} <br><small class="text-sm text-gray-500">Type: ${task.type}, Deadline: ${task.deadline}</small>`;

    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('bx', 'bx-trash', 'text-red-400', 'cursor-pointer', 'ml-4', 'text-xl');

    deleteIcon.addEventListener('click', function () {
        taskItem.remove(); 

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.filter(t => t.name !== task.name || t.desc !== task.desc); 
        localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            taskText.classList.add('line-through', 'text-gray-500'); 
            task.completed = true; 
        } else {
            taskText.classList.remove('line-through', 'text-gray-500'); 
            task.completed = false;
        }

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks = tasks.map(t => t.name === task.name && t.desc === task.desc ? task : t);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskText);
    taskItem.appendChild(deleteIcon);

    document.getElementById('taskList').appendChild(taskItem);
}
