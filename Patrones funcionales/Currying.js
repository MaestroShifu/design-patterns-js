/* Es la tecnica de unificar todas las 
funciones de manera unaria [Solo recibe un argumento] */

const suma = a => b => a + b;

const sum1 = suma(1);
sum1(5);