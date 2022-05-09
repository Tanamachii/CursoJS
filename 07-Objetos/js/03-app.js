const producto = {
    nombre: "Monitor de 144hz",
    precio: 400,
    disponible: true, 
}
//Agregar mas propiedas al objeto 
producto.imagen = "imagen.jpg";

//Eliminar una propiedad del objeto
delete producto.disponible;


console.log(producto);
