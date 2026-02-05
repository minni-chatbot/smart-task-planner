// Select elements
const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("priority");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const darkModeBtn = document.getElementById("darkModeBtn");

// Load tasks from localStorage
window.onload = function () {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => addTask(task.text, task.priority));
};

// Add task button click
addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    addTask(taskText, priority);
    saveTask(taskText, priority);

    taskInput.value = "";
});

// Add task function
function addTask(text, priority) {
    const li = document.createElement("li");
    li.textContent = `${text} (${priority})`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", function () {
        li.remove();
        removeTask(text);
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

// Save task
function saveTask(text, priority) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text, priority });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task
function removeTask(text) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.text !== text);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Dark mode toggle
darkModeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});
