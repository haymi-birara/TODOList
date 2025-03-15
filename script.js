
// script.js
document.getElementById("add-btn").addEventListener("click", addTask);

function addTask() {
    const input = document.getElementById("todo-input");
    const newTask = input.value.trim();

    if (newTask === "") {
        return; // If input is empty, do nothing
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = newTask;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
        li.remove(); // Remove task from list
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    document.getElementById("todo-list").appendChild(li);

    input.value = ""; // Clear the input field after adding the task
}
