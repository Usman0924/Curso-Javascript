//Congelar un objeto para no modificarlo
"use strict"

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 30,
    disponible: true
}

//Prevenir que un objeto que sea modificado
Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = 'imagen.jpg';
console.log(producto);

// producto.disponible = false;
console.log(Object.isFrozen(producto));