//Añadir elementos al inicio o al final del arreglo
const carrito = [];

const producto = {
    nombre: 'Monitor de 32 Pulgadas',
    precio: 300
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

carrito.push(producto2);
carrito.push(producto);

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

//Lo agrega al inicio del arreglo
carrito.unshift(producto3);


console.table(carrito);
