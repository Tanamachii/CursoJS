const carrito = [];

const producto = {
    nombre: 'Monitor 29"',
    precio: 500
}

const producto2 = {
    nombre: 'Iphone 12 PRO MAX"',
    precio: 12000
}

const producto3 = {
    nombre: 'Teclado Razer BlackWidow V3"',
    precio: 3500
}

let resultado;
//Forma declarativa
resultado = [...carrito, producto];

resultado = [...resultado,producto2];

resultado = [producto3,...resultado]

console.table(resultado);