//Obtener datos de local storage
const nombre = localStorage.getItem('nombre');
console.log(nombre);

const productoJson = localStorage.getItem('producto');
//Convertir a meses
console.log(JSON.parse(productoJson));

const meses = JSON.parse(localStorage.getItem('meses'));
console.log(meses);