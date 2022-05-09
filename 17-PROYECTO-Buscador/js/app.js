//Contenedor para los resultados
const resultado = document.querySelector('#resultado')
//Selectores
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')

const maxYear = new Date().getFullYear()
const minYear = maxYear-10

//Objeto que tiene toda la info de la busqueda
const datosBusqueda={
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

document.addEventListener('DOMContentLoaded',() =>{
    mostrarAutos(autos)//Llenar los resultados

    //Llenar los select que hay en la páginas
    llenarSelect()
})

//Event listener para los selects de busqueda
marca.addEventListener('change',e => {
    datosBusqueda.marca = e.target.value
    filtrarAuto()
})
year.addEventListener('change',e => {
    datosBusqueda.year = parseInt(e.target.value)
    filtrarAuto()
})
minimo.addEventListener('change',e => {
    datosBusqueda.minimo = e.target.value
    filtrarAuto()
})
maximo.addEventListener('change',e => {
    datosBusqueda.maximo = e.target.value
    filtrarAuto()
})
puertas.addEventListener('change',e => {
    datosBusqueda.puertas = parseInt(e.target.value)
    filtrarAuto()
})
transmision.addEventListener('change',e => {
    datosBusqueda.transmision = e.target.value
    filtrarAuto()
})
color.addEventListener('change',e => {
    datosBusqueda.color = e.target.value
    filtrarAuto()
})
//Funciones
function mostrarAutos(autos){

    limpiarHTML()//Elimina la lista de filtrados previo

    autos.forEach(auto =>{
        const autoHTML = document.createElement('p')
        autoHTML.textContent = `
        ${auto.marca}  ${auto.modelo} - Año: ${auto.year} - Precio:$ ${auto.precio} - Puertas: ${auto.puertas} - Color: ${auto.color} - Transmisión: ${auto.transmision}
        `
        resultado.appendChild(autoHTML)
    })
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

//Llenar select del año
function llenarSelect(){
    for(let i = maxYear; i>=minYear;i--){
        const opcion = document.createElement("option")
        opcion.value=i
        opcion.textContent = i
        year.appendChild(opcion)
    }
}
//Automaticamente itera sobre el objeto de autos
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    
   
    //Validar si hay informacion con los filtros
    if(resultado.length > 0){
        mostrarAutos(resultado)
    }else{
        noResultado()
    }
}
function noResultado(){
    limpiarHTML()
        const noCarros = document.createElement('div')
        noCarros.classList.add('alerta','error')
        noCarros.textContent = 'No hay carros que coincidan con tu busqueda'
        resultado.appendChild(noCarros)
}

function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca   
    }
    return auto
}

function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year   
    }
    return auto
}

function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo    
    }
    return auto
}

function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo    
    }
    return auto
}
function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas    
    }
    return auto
}
function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision    
    }
    return auto
}
function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color    
    }
    return auto
}