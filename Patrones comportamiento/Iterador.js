/* Mediante una funcion 
se pueden acceder a 2 metodos [Next - value] */

// function* Equivale a funcion generadora [Se puede salir y reacceder a la misma]
// Se utiliza para pausar la funcion generadora

function* iterador(col) {
    var nextIndex = 0;
    while (nextIndex < col.length) {
        yield col[nextIndex++];
    }
}

const x = [1, 2, 3, 4, 5, 6, 7];

const gen = iterador(x);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());