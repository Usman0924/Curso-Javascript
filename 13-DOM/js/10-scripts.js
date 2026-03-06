//Generar html con js
const enlace = document.createElement('A');
enlace.textContent = 'Nuevo enlace';
enlace.href = '/nuevo-enlace';
console.log(enlace);
enlace.target = '_blank';
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('algua-clase');
enlace.onclick = miFuncion; 

const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace);
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion(){
    alert('Diste click');
}

//Crear un card  
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

const info = document.createElement('DIV');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear la imagen
const imagen = document.createElement('IMG');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'imagen curso';

//crear el card
const card = document.createElement('DIV');
card.classList.add('card');

card.appendChild(imagen);
card.appendChild(info);

console.log(card);

const contenedorCards = document.querySelector('.hacer .contenedor-cards');
contenedorCards.insertBefore(card,contenedorCards.children[0]);