const producto = {
    nombre: "Monitor de 144hz",
    precio: 400,
    disponible: true, 
    informacion: {
        medidas:{
            peso: '10kg',
            medida: '29"'
        },
        fabricacion:{
            pais: 'China',
            fabricante: 'Alienware'
        }
    }
}

//Destructuring
const {informacion,informacion:{fabricacion,fabricacion:{pais}}} = producto;
console.log(informacion);
console.log(fabricacion);
console.log(pais);