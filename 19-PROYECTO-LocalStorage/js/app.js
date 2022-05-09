const formulario = document.getElementById('formulario')
const lista = document.getElementById('lista-tweets')
const tweet = document.getElementById('tweet')
let tweets = []


eventListeners()
function eventListeners(){


    formulario.addEventListener('submit',agregarTweet)

    document.addEventListener('DOMContentLoaded',()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || []
        crearHTML()
    })
    
}



function agregarTweet(e){
    e.preventDefault()
    const tweetLocal = tweet.value

    if(tweetLocal.length == 0){
        mostrarError('Un tweets no puede ir vacío')
        return
    }

    const tweetLocalObjt = {
        id: Date.now(),
        text: tweetLocal
    }

    tweets.push(tweetLocalObjt)
    
    crearHTML()
    formulario.reset()
}

function mostrarError(error){
    const mensajeError = document.createElement('p')
    mensajeError.textContent = error
    mensajeError.classList.add('error')

    const contenido = document.getElementById('contenido')
    contenido.appendChild(mensajeError)

    setTimeout(() =>{
        mensajeError.remove()
    },1300)
}

function crearHTML(){
    limpiarHTML()
    if(tweets.length > 0){
        
        tweets.forEach(tweet => {
            const btnEliminar = document.createElement('a')
            btnEliminar.classList.add('borrar-tweet')
            btnEliminar.textContent = 'X'

            btnEliminar.onclick = () =>{
                borrarTweet(tweet.id)
            }

            const li = document.createElement('li')
            li.textContent = tweet.text
            li.appendChild(btnEliminar)
            lista.appendChild(li)
        })
        
    }

    sincronizarStorage()
}

function sincronizarStorage(){
    localStorage.setItem('tweets',JSON.stringify(tweets))
}

function limpiarHTML(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
    
}

function borrarTweet(id){
    tweets = tweets.filter( tweet => tweet.id !== id)
    crearHTML()
}