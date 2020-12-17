/* Nos ayuda agregar mas funcionalidades a una clase,
sin alterarla */

let mixin = {
    saludar() {
        console.log(`Hola ${this.nombre}`);
    },
    despedir() {
        console.log(`Chado ${this.nombre}`)
    }
};

class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

// Aumentamos el prototipo
Object.assign(Usuario.prototype, mixin);

const usuario = new Usuario('Julian');

usuario.saludar(); /* Hola Julian */