// Arreglo principal
var tasks = [
    { id: 1, description: 'Do Html', completed: false },
    { id: 2, description: 'Do Css', completed: false },
    { id: 3, description: 'Do Js', completed: false },
];

// Declaración de variables
var list = document.getElementById('list');
var add = document.getElementById('add');
var list2 = document.getElementById('list2');

// Función para renderizar las tareas
function renderTasks() {
    var html = "";
    tasks.forEach(tarea => {
        html +=
            `<li class="list-i">
            <p>id:${tarea.id}</p>
            <p>Description: ${tarea.description}</p>
            <button class="delete-btn" onclick="deleteTask(${tarea.id})">Delete</button>
            <button id="Complet" onclick="completeTask(${tarea.id})">Complete</button>
            </li>`;
    });
    list.innerHTML = html;

    // Actualizar número total de tareas
    var total = document.getElementById('total');
    total.innerHTML = tasks.length;
}

// Mostrar las tareas iniciales
renderTasks();

// Añadir tarea
add.addEventListener('click', () => {
    var tareaInput = document.getElementById('task');
    var tarea = tareaInput.value.trim(); // Eliminar espacios en blanco al inicio y final
    if (tarea !== "") {
        tasks.push({ id: tasks.length + 1, description: tarea, completed: false });
        tareaInput.value = "";
        renderTasks();
    }
});

// Borrar tarea
function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        renderTasks();
    }
}


// arreglo de tareas completadas

// Mover tarea completada a la lista dos
function completeTask(taskId) {
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        const completedTask = tasks.splice(taskIndex, 1)[0];
        completedTask.completed = true;
        completedTask.id = taskscom.length + 1;
        taskscom.push(completedTask);
        renderTasks();
        renderTasks2();
    }
}

function renderTasks2() {
    var html = "";
    taskscom.forEach(tarea => {
        html +=
            `<li class="list-i completed">
            <p>id:${tarea.id}</p>
            <p>Description: ${tarea.description}</p>
            <button class="delete-btn" onclick="deleteTask2(${tarea.id})">Delete</button>
            </li>`;
    });
    list2.innerHTML = html;
    //tareas completadas
    var completed = document.getElementById('completed');
    completed.innerHTML = taskscom.length;
}
// Arreglo secundario
var taskscom = [];

// Eliminar tarea de la lista dos
function deleteTask2(taskId) {
    const taskIndex = taskscom.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        taskscom.splice(taskIndex, 1);
        renderTasks2();
    }
}