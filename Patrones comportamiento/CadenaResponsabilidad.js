/* Sirve para encadenar acciones */

class Suma {
    constructor(v = 0) {
        this.val = v;
    }

    suma(v) {
        this.val += v;
        return this; // Aca pasa a magia
    }
}

const valor = new Suma(1);

valor
    .suma(1)
    .suma(2)
    .suma(3)
    .suma(4)
    .val
