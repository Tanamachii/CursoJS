// Object literal
const producto = {
    nombre: "Monitor de 144hz",
    precio: 400,
    disponible: true
}

// Object constructor
function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true; 

}

const producto2 = new Producto('Monitor de 24 pulgadas', 5000);

console.log(producto2);