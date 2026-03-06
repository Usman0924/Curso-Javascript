//Diferencia entre forEach y map
const carrito = [
    {nombre:'Monitor de 27 Pulgadas', precio:500},
    {nombre:'Monitor de 32 Pulgadas', precio:700},
    {nombre:'Mouse Gamer', precio:450},
    {nombre:'Mousepad', precio:200},
    {nombre:'Laptop Gamer', precio:3500},
]

// for(let i = 0; i < carrito.length; i++){
//     console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
// }

const nuevoArreglo = carrito.map(producto => `${producto.nombre} - Precio: ${producto.precio}`)

//Array methods
const nuevoArreglo2 =  carrito.forEach(producto => `${producto.nombre} - Precio: ${producto.precio}`)

console.log(nuevoArreglo);