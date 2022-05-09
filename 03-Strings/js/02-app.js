const producto2 = "Laptop Gamer";
const precio = "30 USD";

console.log(producto2.concat(precio));
console.log(producto2.concat('En descuento'));

console.log(producto2 + precio);
//Sintaxis mejor aplicada hoy en día
console.log(`El producto ${producto2} tiene un precio de $${precio}`);