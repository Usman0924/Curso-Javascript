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

const nuevoArreglo = carrito.map(function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

//Array methods
const nuevoArreglo2 =  carrito.forEach(function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo)
console.log(nuevoArreglo2);

//.map te crea un arreglo nuevo