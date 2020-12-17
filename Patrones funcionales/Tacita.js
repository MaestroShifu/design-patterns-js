const f = (ruta, cb) => {
    // Muchas lineas de codigo
    const resultado = computacionPesada();
    cb(resultado);
}

f('/users', manejaResultado);

/* Esto se denomina programacion tacita o poit free */
const manejaResultado = (resultado) => {
    // Fragmento de codigo
}