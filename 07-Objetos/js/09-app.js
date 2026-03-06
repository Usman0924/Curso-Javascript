//Sellar el objeto
"use strict"

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 30,
    disponible: true
}

//Prevenir que un objeto que sea modificado
//A diferencia de freeze, no se pueden agregar o eliminar las propiedades existentes pero si se puede modificar las existentes
Object.seal(producto);

// producto.disponible = false;
// producto.imagen = 'imagen.jpg';
console.log(producto);

// producto.disponible = false;
console.log(Object.isSealed(producto));