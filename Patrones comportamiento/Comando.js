/* Sirve para poder ejecutar algun metodo de 
algun objeto en particular */

const Comander = (() => {
    const o = {
        comprar: x => {
            console.log(`Comprando ${x}`);
        },
        vender: x => {
            console.log(`Vendiendo ${x}`);
        }
    }

    return {
        run: (comando, argumentos) => {
            if(!o[comando]) {
                console.log('Comando no existe!!');
                return;
            }
            o[comando](argumentos)
        }
    }
})();

Comander.run('comprar', 'Auto Mazda');
Comander.run('pepito', 'No pasa nada');