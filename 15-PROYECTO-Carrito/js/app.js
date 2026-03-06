//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos =  document.querySelector('#lista-cursos');

let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners(){
    //Cuando agregas un curso, presionando "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Vacia el carrito
    btnVaciarCarrito.addEventListener('click', ()=>{
        articulosCarrito = [];

        limpiarHtml();
    })
}



//Funciones
function agregarCurso(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        //Desde la imagen sale al contenedor info-card, y sale nuevamente para obtener el card completo
        const cursoSeleccionado = e.target.parentElement.parentElement; 
        leerDatosCurso(cursoSeleccionado);   
    }
    
    
}

// Elimina un curso del carrito
function eliminarCurso(e){

    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML(); //Volvemos a iterar sobre el carrito y mostramos el html
    }
}

// Lee el contenido del HTML al que le dimos click y extre informacion del curso
function leerDatosCurso(curso){
    // console.log(curso);

    //Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id == infoCurso.id);
    if(existe){
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id == infoCurso.id){
                curso.cantidad++;
            }
            return curso;
        })
        articulosCarrito = [...cursos];
    }else{
        //Agregamos el curso al carrito

        //agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    

    carritoHTML();
}

//Muestra el carrito de compras en el html
function carritoHTML(){
    limpiarHtml();
    articulosCarrito.forEach( curso =>{
        const {imagen,titulo, precio, cantidad,id} = curso;
        const row = document.createElement('TR');
        row.innerHTML = `
            <td>
                <img src='${imagen}' width=100px>
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id=${id}>X</a>
            </td>
        `;

        //agrega el html del carrito en tbody
        contenedorCarrito.appendChild(row);
    })
}

function limpiarHtml(){
    //forma lenta
    // contenedorCarrito.innerHTML = '';

    //si al menos tiene algo el contenedor
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}