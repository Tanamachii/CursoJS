localStorage.setItem('nombre','Tanamachi')
sessionStorage.setItem('producto','mac')

const carro = {
    color: 'rojo',
    puertas: '4',
    marca: 'BMW'
}

const carroJson = JSON.stringify(carro);

localStorage.setItem('carro',carroJson)
//pasar string a un objeto otra vez, y asi poder acceder a sus atributos de nuevo
const carros = JSON.parse(localStorage.getItem('carro'))
console.log(carros.color)

