const carrito = [
  { nombre: 'Monitor 19"', precio: 400 },
  { nombre: "Television", precio: 200 },
  { nombre: "Telefono", precio: 2000 },
  { nombre: "Casa", precio: 100 },
  { nombre: "Dulce", precio: 20 },
];

for (let producto of carrito) {
  console.log(`${producto.nombre} --Precio ${producto.precio}`);
}
