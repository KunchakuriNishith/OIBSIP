const taskInput = document.getElementById("task-input");
const pendingList = document.getElementById("pending-list");
const completedList = document.getElementById("completed-list");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");

        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        `;

        taskItem.addEventListener("click", toggleComplete);
        taskInput.value = "";

        pendingList.appendChild(taskItem);
    }
}

function toggleComplete(event) {
    const taskItem = event.currentTarget;
    taskItem.classList.toggle("completed");
    if (taskItem.parentElement === pendingList) {
        completedList.appendChild(taskItem);
    } else {
        pendingList.appendChild(taskItem);
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    const isCompleted = taskItem.classList.contains("completed");
    taskItem.parentElement.removeChild(taskItem);

    if (isCompleted) {
        taskItem.classList.remove("completed");
        pendingList.appendChild(taskItem);
    }
}