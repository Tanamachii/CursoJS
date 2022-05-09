const producto = {
    nombre: "Monitor de 144hz",
    precio: 400,
    disponible: true, 
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio} `)
    }
}

producto.mostrarInfo();