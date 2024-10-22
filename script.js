class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Administrador extends Usuario {
    mostrarInfo() {
        const mensaje = `Nombre: ${this.nombre}, Edad: ${this.edad}, Rol: Administrador`;
        this.mostrarEnDOM(mensaje);
    }
   
    mostrarEnDOM(mensaje) {
        const parrafo = document.createElement('p');
        parrafo.textContent = mensaje;
        document.body.appendChild(parrafo);
    }
}

class Comercial extends Usuario {
    mostrarInfo() {
        const mensaje = `Nombre: ${this.nombre}, Edad: ${this.edad}, Rol: Comercial`;
        this.mostrarEnDOM(mensaje);
    }

    mostrarEnDOM(mensaje) {
        const parrafo = document.createElement('p');
        parrafo.textContent = mensaje;
        document.body.appendChild(parrafo);
    }
}

// Ejemplo de uso
const admin = new Administrador('Juan', 35);
const comercial = new Comercial('Ana', 28);

// Agregando eventos a los botones
document.getElementById('btnAdmin').addEventListener('click', () => admin.mostrarInfo());
document.getElementById('btnComercial').addEventListener('click', () => comercial.mostrarInfo());
