const encabezado = document.querySelector('.contenido-hero h1').textContent;
// encabezado.textContent = 'Contenido modificado';

// console.log(encabezado.innerText); //si en el css visibility esta como hidden, no lo va a encontrar
// console.log(encabezado.textContent);
// console.log(encabezado.innerHTML); //se trae el html

console.log(encabezado);

// document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading';

const imagen = document.querySelector('.card img');
imagen.src ='img/hacer2.jpg';
console.log(imagen);