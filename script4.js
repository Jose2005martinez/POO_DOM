class Tarea {
    constructor(nombre, persona) {
        this.nombre = nombre;
        this.persona = persona;
    }
}

class AdministradorDeTareas {
    constructor() {
        this.tareas = [];
    }

    agregarTarea(nombre, persona) {
        const nuevaTarea = new Tarea(nombre, persona);
        this.tareas.push(nuevaTarea);
        this.mostrarTareas();
    }

    modificarTarea(indice, nuevoNombre, nuevaPersona) {
        if (indice >= 0 && indice < this.tareas.length) {
            this.tareas[indice].nombre = nuevoNombre;
            this.tareas[indice].persona = nuevaPersona;
            this.mostrarTareas();
        } else {
            console.error("Índice de tarea no válido.");
        }
    }

    eliminarTarea(indice) {
        if (indice >= 0 && indice < this.tareas.length) {
            this.tareas.splice(indice, 1);
            this.mostrarTareas();
        } else {
            console.error("Índice de tarea no válido.");
        }
    }

    mostrarTareas() {
        const listaTareas = document.getElementById("listaTareas");
        listaTareas.innerHTML = ""; // Limpiar la lista antes de mostrar

        this.tareas.forEach((tarea, indice) => {
            const li = document.createElement("li");
            li.textContent = `${tarea.nombre} - Asignada a: ${tarea.persona}`;
           
            const botonEditar = document.createElement("button");
            botonEditar.textContent = "Editar";
            botonEditar.onclick = () => this.editarTarea(indice);

            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "Eliminar";
            botonEliminar.onclick = () => this.eliminarTarea(indice);

            li.appendChild(botonEditar);
            li.appendChild(botonEliminar);
            listaTareas.appendChild(li);
        });
    }

    editarTarea(indice) {
        const nuevoNombre = prompt("Nuevo nombre de la tarea:", this.tareas[indice].nombre);
        const nuevaPersona = prompt("Nueva persona asignada:", this.tareas[indice].persona);
       
        if (nuevoNombre && nuevaPersona) {
            this.modificarTarea(indice, nuevoNombre, nuevaPersona);
        }
    }
}

// Uso del AdministradorDeTareas
const adminTareas = new AdministradorDeTareas();

// Agregar un evento para probar la funcionalidad
document.getElementById("agregarTarea").onclick = () => {
    const nombre = document.getElementById("nombreTarea").value;
    const persona = document.getElementById("personaAsignada").value;
    if (nombre && persona) {
        adminTareas.agregarTarea(nombre, persona);
        document.getElementById("nombreTarea").value = '';
        document.getElementById("personaAsignada").value = '';
    } else {
        alert("Por favor, completa ambos campos.");
    }
};