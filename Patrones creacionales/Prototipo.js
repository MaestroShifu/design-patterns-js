/* Podemos tomar un objeto definido y 
generar protos para otros objetos */

const perro = {
    raza: 'Daltamata',
    ladrar: function () {
        console.log(`Guau!!, soy un ${this.raza}`)
    } 
};

const kiltro = Object.create(perro);

kiltro.ladrar();
console.log(kiltro); // {}

kiltro.raza = 'Super perrazo papu!!';
kiltro.ladrar();
console.log(kiltro); // { raza: 'Super perrazo papu!!' }