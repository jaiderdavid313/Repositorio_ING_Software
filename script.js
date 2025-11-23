document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
    const pendingTasksCount = document.getElementById('pendingTasksCount');
    const completedTasksCount = document.getElementById('completedTasksCount');

    let tasks = []; // Array para almacenar las tareas

    // Función para actualizar los contadores
    function updateTaskCounts() {
        const pending = tasks.filter(task => !task.completed).length;
        const completed = tasks.filter(task => task.completed).length;
        pendingTasksCount.textContent = pending;
        completedTasksCount.textContent = completed;
    }

    // Función para renderizar las tareas en la UI
    function renderTasks() {
        taskList.innerHTML = ''; // Limpiar la lista actual

        tasks.forEach((task, index) => {
            const listItem = document.createElement('li');
            listItem.className = task.completed ? 'completed' : ''; // Añade la clase 'completed' si la tarea está hecha

            listItem.innerHTML = `
                <span class="task-text">${task.text}</span>
                <div class="task-actions">
                    <button class="complete-btn" data-index="${index}" title="Marcar como completada">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="delete-btn" data-index="${index}" title="Eliminar tarea">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;

            // Evento para marcar como completada (al hacer clic en el texto o el botón)
            listItem.querySelector('.task-text').addEventListener('click', () => toggleTaskCompleted(index));
            listItem.querySelector('.complete-btn').addEventListener('click', () => toggleTaskCompleted(index));

            // Evento para eliminar tarea
            listItem.querySelector('.delete-btn').addEventListener('click', () => deleteTask(index));

            taskList.appendChild(listItem);
        });
        updateTaskCounts(); // Actualizar contadores cada vez que se renderizan las tareas
    }

    // RF1: Añadir nueva tarea
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            tasks.push({ text: taskText, completed: false });
            taskInput.value = ''; // Limpiar input
            renderTasks(); // Volver a renderizar la lista
        }
    });

    // Permitir añadir tarea con la tecla Enter
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click(); // Simular clic en el botón de añadir
        }
    });

    // RF2: Marcar/desmarcar tarea como completada
    function toggleTaskCompleted(index) {
        tasks[index].completed = !tasks[index].completed; // Invertir el estado
        renderTasks(); // Volver a renderizar
    }

    // RF3: Eliminar tarea
    function deleteTask(index) {
        tasks.splice(index, 1); // Eliminar del array
        renderTasks(); // Volver a renderizar
    }

    // Renderizar las tareas iniciales (en este caso, ninguna al principio)
    renderTasks();
});