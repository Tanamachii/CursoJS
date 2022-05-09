"use strict";

const producto = {
    nombre: "Monitor de 144hz",
    precio: 400,
    disponible: true, 
}

//No permite agregar o borrar propiedades del objeto 
Object.seal(producto);

producto.disponible = false;

console.log(producto);
//Para saber si un objeto esta sellado(seal)
console.log(Object.isSealed(producto));
