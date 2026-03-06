//.reduce
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let total = 0;


//con un reduce
//total es la variable donde se ira agregando el resultado
//Después de la coma asignamos el valor en el que iniciara
let resultado = carrito.reduce((total, producto) => total + producto.precio,0);

console.log(resultado);