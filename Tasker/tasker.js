const categories = ["Personal", "Work", "Shopping", "Study"]; // Example categories

// Populate category dropdowns
function populateCategories() {
    const categoryDropdown = document.getElementById("category");
    const taskCategoryDropdown = document.getElementById("taskCategoryInput");

    categories.forEach(category => {
        const option1 = document.createElement("option");
        option1.textContent = category;
        categoryDropdown.appendChild(option1);

        const option2 = document.createElement("option");
        option2.textContent = category;
        taskCategoryDropdown.appendChild(option2);
    });
}

// Function to show the Add Task modal
function showAddTaskModal() {
    const modal = document.getElementById("addTaskModal");
    modal.style.display = "block";
}

// Function to close the Add Task modal
function closeAddTaskModal() {
    const modal = document.getElementById("addTaskModal");
    modal.style.display = "none";
}

// Function to cancel adding a task
function cancelAddTask() {
    closeAddTaskModal();
}

// Function to confirm adding a task
function confirmAddTask() {
    const taskNameInput = document.getElementById("taskNameInput");
    const taskCategoryInput = document.getElementById("taskCategoryInput");

    const taskName = taskNameInput.value.trim();
    const taskCategory = taskCategoryInput.value.trim();

    if (taskName !== "" && taskCategory !== "") {
        // Perform addition of task
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="radio" name="taskRadio">
            <span>${taskName}</span>
            <span class="task-category">(${taskCategory})</span>
            <i class="far fa-edit" onclick="editTask(this)"></i>
            <i class="far fa-trash-alt" onclick="deleteTask(this)"></i>
        `;
        taskList.appendChild(li);

        // Close the modal after adding the task
        closeAddTaskModal();
    } else {
        alert("Please enter both task name and category.");
    }
}

// Function to edit a task
function editTask(editIcon) {
    const taskItem = editIcon.parentNode;
    const taskName = taskItem.querySelector('span').textContent;
    const newTaskName = prompt("Edit task:", taskName);
    if (newTaskName !== null && newTaskName.trim() !== "") {
        taskItem.querySelector('span').textContent = newTaskName.trim();
    }
}

// Function to delete a task
function deleteTask(deleteIcon) {
    const listItem = deleteIcon.parentNode;
    listItem.parentNode.removeChild(listItem);
}

// Function to filter tasks
function filterTasks() {
    const filterIcon = document.getElementById("filterIcon");
    const taskList = document.getElementById("taskList");
    const tasks = taskList.getElementsByTagName("li");

    if (filterIcon.classList.contains("active")) {
        // Remove filter
        Array.from(tasks).forEach(task => {
            task.style.display = "block";
        });
        filterIcon.classList.remove("active");
    } else {
        // Apply filter
        Array.from(tasks).forEach(task => {
            if (!task.querySelector(".task-category").textContent.includes("Study")) {
                task.style.display = "none";
            } else {
                task.style.display = "block";
            }
        });
        filterIcon.classList.add("active");
    }
}
function logout(){
    alert('Are you sure to log out')
    window.location.href='./homes.html'
}

// Populate category dropdowns on page load
populateCategories();
// Function to confirm adding a task
function confirmAddTask() {
    const taskNameInput = document.getElementById("taskNameInput");
    const taskCategoryInput = document.getElementById("taskCategoryInput");

    const taskName = taskNameInput.value.trim();
    const taskCategory = taskCategoryInput.value.trim();

    if (taskName !== "" && taskCategory !== "") {
        // Perform addition of task
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.innerHTML = `
            <input type="radio" name="taskRadio">
            <span>${taskName}</span>
            <span class="task-category">(${taskCategory})</span>
            <i class="far fa-edit" onclick="editTask(this)"></i>
            <i class="far fa-trash-alt" onclick="deleteTask(this)"></i>
        `;
        taskList.appendChild(li);

        // Close the modal after adding the task
        closeAddTaskModal();

        // Add event listener to the radio button
        const radioButton = li.querySelector('input[type="radio"]');
        radioButton.addEventListener("click", function () {
            const taskText = li.querySelector("span");
            if (this.checked) {
                taskText.classList.toggle("strike-through");
            } else {
                taskText.classList.remove("strike-through");
            }
        });
    } else {
        alert("Please enter both task name and category.");
    }
}
// Button click event listeners
document.getElementById("all").addEventListener("click", function () {
    this.classList.add("active");
    document.getElementById("done").classList.remove("active");
    document.getElementById("notdone").classList.remove("active");
    filterTasksByCategory();
});

document.getElementById("done").addEventListener("click", function () {
    this.classList.add("active");
    document.getElementById("all").classList.remove("active");
    document.getElementById("notdone").classList.remove("active");
    filterTasksByCategory();
});

document.getElementById("notdone").addEventListener("click", function () {
    this.classList.add("active");
    document.getElementById("all").classList.remove("active");
    document.getElementById("done").classList.remove("active");
    filterTasksByCategory();
});
