document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input and trim

        if (taskText === "") {
            alert("Please enter a task!"); // Check if empty
            return;
        }

        // Create <li> for task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Remove task on click
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append remove button to <li>
        li.appendChild(removeBtn);

        // Append <li> to task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event listener: add task on button click
    addButton.addEventListener('click', addTask);

    // Event listener: add task on Enter key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

