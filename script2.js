class ListaTareas {
    constructor() {
        this.tareas = [];
        this.id = 0; // Contador para generar IDs únicos
    }

    agregarTarea(tarea) {
        this.id++; // Incrementar el ID
        const nuevaTarea = {
            id: this.id,
            texto: tarea
        };

        this.tareas.push(nuevaTarea);
        this.mostrarTareaEnDOM(nuevaTarea);
    }

    mostrarTareaEnDOM(tarea) {
        const ul = document.getElementById('listaTareas');
        const li = document.createElement('li');
        li.textContent = tarea.texto;
        li.setAttribute('data-id', tarea.id); // Establecer un atributo con el ID único
        ul.appendChild(li);
    }
}

// Ejemplo de uso
const lista = new ListaTareas();

// Agregar evento al botón para agregar tareas
document.getElementById('btnAgregar').addEventListener('click', () => {
    const input = document.getElementById('inputTarea');
    const tareaTexto = input.value.trim();
    if (tareaTexto) {
        lista.agregarTarea(tareaTexto);
        input.value = ''; // Limpiar el campo de entrada
    }
});
