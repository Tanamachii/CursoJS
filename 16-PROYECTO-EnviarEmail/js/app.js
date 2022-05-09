//variables
const enviarBtn = document.querySelector('#enviar')
const formulario = document.querySelector('#enviar-mail')
const resetearBtn = document.querySelector('#resetBtn')
//Variables para campos de formulario
const textEmail = document.querySelector('#email')
const textAsunto = document.querySelector('#asunto')
const textMensaje = document.querySelector('#mensaje')

//Expresion regultar del email 
const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//eventlistenerInicial
eventListeners();
function eventListeners(){
    document.addEventListener("DOMContentLoaded",iniciarApp);

    resetearBtn.addEventListener('click',resetearFormulario)
    textEmail.addEventListener('blur',validarFormulario)
    textAsunto.addEventListener('blur',validarFormulario)
    textMensaje.addEventListener('blur',validarFormulario)
}
//Enviar email
formulario.addEventListener('submit',enviaremail)


//Funciones
function iniciarApp(){
    enviarBtn.disabled = true
    enviarBtn.classList.add('cursor-not-allowed','opacity-50')
}
function validarFormulario(e){
    
    if(e.target.value.length > 0){
        //eliminar el text de error del error
        const error = document.querySelector('p.error')
        if(error){
            error.remove()
        }

        e.target.classList.remove('border','border-red-500')
        e.target.classList.add('border','border-green-500')
    }else{
        e.target.classList.remove('border','border-green-500')
        e.target.classList.add('border','border-red-500')
        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email'){
        
        if (er.test(e.target.value)){
            const error = document.querySelector('p.error')
            if(error){
                error.remove()
            }
            e.target.classList.remove('border','border-red-500')
            e.target.classList.add('border','border-green-500')
        }else{
            e.target.classList.remove('border','border-green-500')
            e.target.classList.add('border','border-red-500')
            mostrarError('Email invalido');
        }
    }

    if(er.test(textEmail.value) && textAsunto.value !== '' && textMensaje.value !== ''){
        enviarBtn.disabled = false
        enviarBtn.classList.remove('cursor-not-allowed','opacity-50')
    }else {
        enviarBtn.disabled = true
        enviarBtn.classList.add('cursor-not-allowed','opacity-50')
    }
    

}
function mostrarError(mensaje){
    const mensajeError = document.createElement('p')
    mensajeError.textContent = mensaje
    mensajeError.classList.add('border','border-red-500','background-red-100','text-red-500','p-3','mt-5','text-center','error') 

    const errores = document.querySelectorAll('.error')
    if(errores.length === 0){
        formulario.appendChild(mensajeError)
    }

}

//Función envira email
function enviaremail(e){
    e.preventDefault()
    //Mostrar spinner "logo de cargando"
    const spinner = document.querySelector('#spinner')
    spinner.style.display = 'flex'

    //set time out 
    setTimeout(() =>{
        spinner.style.display = 'none'
        resetearFormulario()
        
    },3000)
    iniciarApp()
}

function resetearFormulario(){
    formulario.reset()
    textEmail.classList.remove('border','border-red-500')
    textAsunto.classList.remove('border','border-red-500')
    textMensaje.classList.remove('border','border-red-500')
    iniciarApp()
}

