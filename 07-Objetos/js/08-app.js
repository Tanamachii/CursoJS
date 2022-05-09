"use strict";

const producto = {
    nombre: "Monitor de 144hz",
    precio: 400,
    disponible: true, 
}

//Congelar un objeto
// Object.freeze(producto);
//Object IsFrozen para saber si hay un jobjet congelado

producto.disponible = false;
producto.imagen = 'Imagen.jpg';

console.log(producto);
