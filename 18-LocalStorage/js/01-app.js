//Solamente almacena strings


//                   Llave      Valor
localStorage.setItem('nombre', 'Sergio');


// Almacenamiento de sesion
// sessionStorage.setItem('nombre','Sergio');

const producto ={
    nombre: 'Monitor de 24 Pulgadas',
    precio: 300
};

//convertir en un json
const productoString =  JSON.stringify(producto);
localStorage.setItem('producto',productoString);

const meses = ['Enero', 'Febrero','Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses',mesesString);