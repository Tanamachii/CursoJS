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

carrito.push(producto2);
carrito.push(producto);
//Lo agrega al inicio del arreglo
carrito.unshift(producto3);

console.table(carrito);