//Agregar o eliminar propiedades en un objeto
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 30,
    disponible: true
}

//Agregar propiedad al objeto
producto.imagen = 'imagen.jpg';

//Eliminar una propiedad del objeto
delete producto.disponible;

console.log(producto);