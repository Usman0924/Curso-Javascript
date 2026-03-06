//Eliminar elementos con splice
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

const producto4 = {
    nombre: 'Matricula',
    precio: 390
}

carrito.push(producto2);
carrito.push(producto);
carrito.push(producto4);

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

//Lo agrega al inicio del arreglo
carrito.unshift(producto3);


console.table(carrito);

// //Elimina al final
// carrito.pop();

// console.table(carrito);

// carrito.pop();

// console.table(carrito);

//Eliminar del inicio del arreglo
// carrito.shift();

//Eliminar cualquier elemento en un arreglo
carrito.splice(1,1);

console.table(carrito);


