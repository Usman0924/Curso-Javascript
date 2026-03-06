//Destructuring en los objetos
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 30,
    disponible: true
}

//Asignar a una variable, forma anterior de hacerlo
// const nombre = producto.nombre;
// console.log(nombre);

//Object destructuring
const {nombre,precio} = producto;
console.log(nombre);
console.log(precio);