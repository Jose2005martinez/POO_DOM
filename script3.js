class Elemento {
    constructor(parrafoId) {
        this.parrafo = document.getElementById(parrafoId);
    }

    cambiarColorFondo(color) {
        this.parrafo.style.backgroundColor = color;
    }
}

class Boton extends Elemento {
    constructor(parrafoId, color, botonId) {
        super(parrafoId);
        this.color = color;
        this.boton = document.getElementById(botonId);
       
        // Agregar el evento de clic al botón
        this.boton.addEventListener('click', () => this.cambiarColorFondo(this.color));
    }
}

// Ejemplo de uso
const elemento = new Elemento('miParrafo');
const botonRojo = new Boton('miParrafo', 'red', 'btnRojo');
const botonNegro = new Boton('miParrafo', 'Black', 'btnNegro');
