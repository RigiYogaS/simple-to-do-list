window.addEventListener("load", function() {
    const username = localStorage.getItem("name");
    const password = localStorage.getItem("password");
  
    if (username && password) {
      console.log("Welcome, " + username);
  
      document.getElementById("displayName").textContent = `${username}`;
  
      localStorage.setItem("name", username);
      localStorage.setItem("password", password);
    } else {
      window.location.href = "../todo/login.html";
    }
  });

  
window.onload = function() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(function(task) {
        if (!task.completed) { 
            addTaskToDOM(task);
        }
    });
}

function addTaskToDOM(task) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('flex', 'items-center', 'space-x-4', 'bg-yellow-200' ,'border', 'border-yellow-400', 'rounded-md', 'p-4', 'cursor-pointer', 'my-4', 'w-full');


    const taskText = document.createElement('span');
    taskText.classList.add('flex-grow');
    taskText.innerHTML = `<strong>${task.name}</strong> - ${task.desc} <br><small class="text-sm text-gray-500">Type: ${task.type}, Deadline: ${task.deadline}</small>`;

    taskItem.appendChild(taskText);

    document.getElementById('taskList').appendChild(taskItem);
}