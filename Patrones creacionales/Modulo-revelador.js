/* Contiene una api publica y privada, IIFE */

const resultado = (() => {
    const x = {}; // Private

    return { // Public
        a: () => console.log(x),
        b: (key, value) => x[key] = value
    }
})();

resultado.a(); // {}
resultado.b('queso', 'cabra');
resultado.a(); // { queso: 'cabra }
console.log(resultado.x); // No se puede acceder


/* Example */
const Users = (() => {
    const recurso = '/users';

    return {
        listar: async () => {
            return await fetch(recurso).then(x => x.json())
        },
        crear: async (data) => {
            return await fetch(recurso, {
                type: 'POST',
                body: JSON.stringify(data)
            }).then(x => x.json())
        },
    }
})();