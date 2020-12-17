/* Como unir una serie de funciones para trabajar de manera mas limpia */

const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'Soto'},
    { edad: 18, nombre: 'Chanchito', apellido: 'Feliz'},
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandez'},
    { edad: 1, nombre: 'Sofia', apellido: 'Zapata'},
];

// Todas estas funciones son helpers o utils
const compose = (...fns) => x => fns.reduceRight((acc, value) => value(acc), x);
const pipe = (...fns) => x => fns.reduce((acc, value) => value(acc), x);
const trace = x => y => console.log(x, y);
const filter = f => xs => xs.filter(f);
const head = xs => xs[0];
const formateo = x => ({
    nombreCompleto: `${x.nombre} ${x.apellido}`,
    edad: primerInfante.edad
});
const formato = x => `${x.nombreCompleto} tiene ${x.edad} año(s)`
/* ========================================== */

/* Composicion de funciones */
const traePrimerInfante = compose(
    formato,
    formateo,
    head,
    filter(x => x.edad < 2)
);

const traePrimerInfante2 = pipe(
    filter(x => x.edad < 2),
    trace('Despues de filter'),
    head,
    formateo,
    formato
);