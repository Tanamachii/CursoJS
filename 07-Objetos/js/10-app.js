"use strict";

const producto = {
    nombre: "Monitor de 144hz",
    precio: 400,
    disponible: true, 
}

const medidas = {
    peso : '1kg',
    medida: '1metro'
}

console.log(producto,medidas)

// Juntar los dos objetos en uno
const resultado = Object.assign(producto,medidas);
console.log(resultado);

//Igual pero mas pro
const resultado2 = {...producto, ...medidas};
console.log(resultado2);