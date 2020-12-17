/* Toma todas las instancias de una clase y 
agrega funcionalidades */

// Forma sencilla
class Macbook {
    constructor() {
        this.precio = 1000;
        this.pantalla = 11.6;
    }
}

const macbook = new Macbook();

macbook.agregarMemoria = function() {
    this.precio += 100;
}

console.log(macbook.precio); /* 1100 */

// Form try hard
class Macbook {
    precio() {
        return 1000;
    }
}

const memoria = mac => {
    const v = mac.precio();
    mac.precio = function () {
        return v + 100;   
    }
}

const macbook = new Macbook();

memoria(macbook)

console.log(macbook.precio()); /* 1100 */