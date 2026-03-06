//Como acceder a las propiedades de un objeto
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 30,
    disponible: true
}

console.log(producto);
console.log(producto.nombre);
console.log(producto.precio);

//Forma no tan comun
console.log(producto['nombre']);