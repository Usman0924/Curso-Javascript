//El problema con los objetos
//Prevenir que se modifiquen las propiedades de un objeto
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 30,
    disponible: true
}

producto.disponible = false;

console.log(producto);