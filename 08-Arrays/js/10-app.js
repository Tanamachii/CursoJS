const carrito = [
  { nombre: 'Monitor 19"', precio: 400 },
  { nombre: "Television", precio: 200 },
  { nombre: "Telefono", precio: 2000 },
  { nombre: "Casa", precio: 100 },
  { nombre: "Dulce", precio: 20 },
];
//Permite crear un nuevo arreglo y no solo mostarlo
const nuevoArreglo = carrito.map(function (producto) {
  return `${producto.nombre} -Precio ${producto.precio}`;
});

const nuevoArreglo2 = carrito.forEach(function (producto) {
  return `${producto.nombre} -Precio ${producto.precio}`;
});
//MAP
console.log(nuevoArreglo);
//For each
console.log(nuevoArreglo2);
