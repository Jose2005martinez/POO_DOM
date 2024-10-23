class Paciente {
    constructor(nombre, apellido, edad, terapia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.terapia = terapia;
    }
}

class Psicologo extends Paciente {
    constructor(nombre, apellido, edad, terapia) {
        super(nombre, apellido, edad, terapia);
    }

    mostrarInfo() {
        const infoDiv = document.getElementById('infoPaciente');
        infoDiv.innerHTML = `
            <p>Nombre: ${this.nombre} ${this.apellido}</p>
            <p>Edad: ${this.edad}</p>
            <p>Tipo de terapia: ${this.terapia}</p>
        `;
        infoDiv.style.display = 'block';
    }

    agregarEstilos() {
        const infoDiv = document.getElementById('infoPaciente');
        infoDiv.style.color = '#0056b3';
        infoDiv.style.fontWeight = 'bold';
    }
}

// Creación de los pacientes
const pacientes = [
    new Psicologo('Juan', 'Pérez', 30, 'Terapia Cognitiva'),
    new Psicologo('María', 'González', 28, 'Terapia Conductual'),
    new Psicologo('Carlos', 'López', 40, 'Psicoanálisis'),
    new Psicologo('Ana', 'Rodríguez', 35, 'Terapia Sistémica'),
    new Psicologo('José', 'Fernández', 45, 'Terapia Humanista'),
    new Psicologo('Laura', 'Méndez', 29, 'Terapia Gestalt'),
    new Psicologo('Diego', 'Martínez', 33, 'Terapia Cognitivo-Conductual')
];

document.getElementById('mostrarInfoBtn').addEventListener('click', () => {
    const selectedIndex = document.getElementById('pacienteSelect').value;
    if (selectedIndex !== "0") {
        const paciente = pacientes[selectedIndex - 1];
        paciente.mostrarInfo();
        paciente.agregarEstilos();
    } else {
        alert("Por favor, selecciona un paciente.");
    }
});

