// Selección de elementos DOM <ñ
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Cargar las tareas del almacenamiento local al cargar la página
document.addEventListener("DOMContentLoaded", loadTaskFromLocalStorage);

// Agregar tareas
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim(); // Limpiar espacios al inicio y final
    if (taskText) {
        addTaskToList(taskText); // Agregar tarea a la lista
        saveTaskToLocalStorage(taskText); // Guardar tarea en localStorage
        taskInput.value = ""; // Limpiar el input
    }
});
// Función para agregar tareas a la lista
function addTaskToList(taskText, isCompleted = false) {
    const li = document.createElement("li");
    li.className = "Task-Item";
    if (isCompleted) li.classList.add("completed");
    const span = document.createElement("span");
    span.textContent = taskText;
    // Botón para marcar tarea como completada
    const completeButton = document.createElement("button");
    completeButton.textContent = "✓";
    completeButton.style.backgroundColor = "#3e6f3d";
    completeButton.addEventListener("click", () => {
        li.classList.toggle("completed");
        updateTaskStatusInLocalStorage(taskText);
    });
    // Botón para eliminar tarea
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(li);
        deleteTaskFromLocalStorage(taskText);
    });
    li.appendChild(span);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

// Guardar tarea en el almacenamiento local
function saveTaskToLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Cargar tareas del almacenamiento local
function loadTaskFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => {
        addTaskToList(task.text, task.completed);
    });
}
// Actualizar estado de la tarea en el almacenamiento local
function updateTaskStatusInLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskIndex = tasks.findIndex((task) => task.text === taskText);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}
// Eliminar tarea del almacenamiento local
function deleteTaskFromLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter((task) => task.text !== taskText);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}
