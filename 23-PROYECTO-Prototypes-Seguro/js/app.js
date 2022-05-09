//Constructores 
function Seguro(marca,year,tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//Realiza la cotizacion con los datos

Seguro.prototype.cotizarSeguro = function(){
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */
   let cantidad
   const base = 2000
   switch(this.marca){
        case '1':
            cantidad = base * 1.15
            break;
        case '2':
            cantidad = base * 1.05
            break;
        case '3':
            cantidad = base * 1.35
            break;
        default: 
            break;
   }
   //Leer el año
   const diferencia  = new Date().getFullYear() - this.year

   //Cada año el costo bajara 3% del valor del seguro (cantidad)
   cantidad -= ((diferencia*3)* cantidad) / 100

   //Cotizar por tipo de seguro  
   /*
        Si el seguro es basicos se multiplicara por un 20%
        Si es seguro completo se multiplicara por un 50% 
   */
   if(this.tipo === 'completo'){
       cantidad *= 1.5
   }else{
       cantidad *= 1.30
   }

   return cantidad

}

function UI (){}

//Llena las opciones de los años
UI.prototype.llenarOpciones = function(){
    const max = new Date().getFullYear(),
          min = max-10
    
    const selectYear = document.getElementById('year')
    for (let i = max; i > min; i--){
        let option = document.createElement('option')
        option.value = i
        option.textContent = i
        selectYear.appendChild(option)
    }
}
//Muestra alertas en pantalla
UI.prototype.mostrarMensaje = function(mensaje,tipo){
    const div = document.createElement('div')
    if(tipo == 'error'){
        div.classList.add('error')
    }else{
        div.classList.add('correcto')
    }
    div.classList.add('mensaje','mt-10')
    div.textContent =mensaje
    //Insertar en el html
    const formulario = document.getElementById('cotizar-seguro')
    formulario.insertBefore(div,document.querySelector('#resultado'))

    setTimeout( () => {
        div.remove()
    },3000)
}
UI.prototype.mostrarResultado = function(total,seguro){
    //Crear el resultdao 
    const botonEnviar = document.getElementById('botonSubmit')
    const {marca,year,tipo} = seguro
    const div = document.createElement('div')
    div.classList.add('mt-10')
    let textoMarca
    switch(marca){
        case '1':
            textoMarca = 'Americano'
            break;
        case '2':
            textoMarca = 'Asiatico'
            break;
        case '3':
            textoMarca = 'Europeo'
            break;
        default:
            break;
    }

    div.innerHTML = `
    <p class="header" >Tu resumen </p>
    <p class="font-bold">Marca: ${textoMarca}</p>
    <p class="font-bold">Año: ${year}</p>
    <p class="font-bold">Tipo: <span class="capitalize font-normal">${tipo}</span></p>
    <p class="font-bold"> Total:$ ${total} </p>
    `
    const resultadoDiv = document.querySelector('#resultado')
   

    //Mostrar el spinner
    const spinner = document.querySelector('#cargando')
    spinner.style.display = 'block'

    setTimeout( () => {
        spinner.style.display = 'none'
        resultadoDiv.appendChild(div)
        botonEnviar.style.display = 'block'
    },3000)

}
//Instanciar UI
const ui = new UI()

document.addEventListener("DOMContentLoaded",() => {
    ui.llenarOpciones() //Llenar el select con los años
    
})

eventListeners()
function eventListeners() {
    const formulario = document.getElementById('cotizar-seguro')
    formulario.addEventListener('submit', cotizarSeguro)
}

function cotizarSeguro(e){
    e.preventDefault()
    const botonEnviar = document.getElementById('botonSubmit')
    botonEnviar.style.display = 'none'
    
    //Leer la marca seleccionado
    const marca = document.getElementById('marca').value
    
    //Leer el año seleccionado
    const year = document.getElementById('year').value

    //Leer el tipo de seguro
    //Asi se lee el componenente de tipo radio button, verifica por el input que sea tipo y lugeo por el que checked igual true
    const tipo = document.querySelector('input[name="tipo"]:checked').value

    if(marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son obligatorios','error')
        return
    }
    ui.mostrarMensaje('Cotizando...','exito')

    //Ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div')
    if(resultados != null){
        resultados.remove()
    }

    //Instancia el seguro
    const seguro = new Seguro(marca, year, tipo)
    const total = seguro.cotizarSeguro()
    //Utilizar el prototype que va a cotizar
    ui.mostrarResultado(total,seguro)

}