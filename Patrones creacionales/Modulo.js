/* Posee metodos y propiedades. Se basa en objetos de js */

const modulo = {
    prop: 'Mi prop',
    config: {
        lenguaje: 'es',
        cache: true
    },
    setConfig: conf => {
        modulo.config = conf;
    },
    isCacheEnabled: () => {
        console.log(modulo.config.cache ? "Si" : "No");
    }
}