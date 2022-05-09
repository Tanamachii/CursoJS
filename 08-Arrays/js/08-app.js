const producto = {
    nombre: 'Monitor 29"',
    precio: 500,
    disponible: true
}

const {nombre} = producto;

console.log(nombre);

// Destructirn ocn arreglos
const numeros = [1,2,3,4,5];
// Te trae el primer elemeno del arreglo
const [primero,...segundo] = numeros;
console.log(segundo);