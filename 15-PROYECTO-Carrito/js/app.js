//variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListener();
function cargarEventListener(){
    listaCursos.addEventListener('click', agregarCurso);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

    //Mostrar los cursod el localStorage 
    document.addEventListener('DOMContentLoaded',() => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito'))  || []

        carritoHtml()
    })

    carrito.addEventListener('click',eliminarCurso);
}

//Funciones

function agregarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito') ){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');
        //Eliminar del carrito por el IDs
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHtml();

    }
}
function vaciarCarrito(e) {
    e.preventDefault();
    contenedorCarrito.innerHTML = '';
    articulosCarrito = [];
    carritoHtml()
}
//Lee el contenido del HTML
function leerDatosCurso(cursoseleccionado){

//Crear objeto con el curso seleccionado
const infoCurso = {
    imagen: cursoseleccionado.querySelector('img').src,
    titulo: cursoseleccionado.querySelector('h4').textContent,
    precio: cursoseleccionado.querySelector('.precio span').textContent,
    id: cursoseleccionado.querySelector('a').getAttribute('data-id'),
    cantidad: 1
}

const existe = articulosCarrito.some(curso => curso.id === infoCurso.id); 
if (existe){
    const cursos = articulosCarrito.map(curso => {
        if(curso.id === infoCurso.id){
            curso.cantidad++;
            return curso;
        }else{
            return curso;
        }
    })
    
    articulosCarrito = [...cursos]

}else{
    //Agregar los articulos al array
    articulosCarrito = [...articulosCarrito,infoCurso];
}

carritoHtml()
}

//Muestra el carrito de compras en el HTML 
function carritoHtml(){

    //Limpiar el hmtl del carrito 
    limpiarHtml();

    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td> 
            <img src="${curso.imagen}" width=100 /> 
        </td>
        <td> 
            ${curso.titulo} 
        </td>
        <td> 
            ${curso.precio} 
        </td>
        <td> 
            ${curso.cantidad} 
        </td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
        `;
        

        //agrear el carrito al tbody
        contenedorCarrito.appendChild(row);
    })

    sicronizarLocalStorage()
}

function sicronizarLocalStorage(){
    localStorage.setItem('carrito',JSON.stringify(articulosCarrito))
}

function limpiarHtml(){
    contenedorCarrito.innerHTML = '';
}