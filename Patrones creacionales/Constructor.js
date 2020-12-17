/* Mandas datos y inicializa un objeto completo */

class MyClass {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.metodo = () => {
            console.log('Soy un metodo');
        }
    }
}

const instancia = new MyClass(4);
console.log(instancia); /* MyClass { p1: 4, p2: undefined, metodo: [Function] } */