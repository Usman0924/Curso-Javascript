const pendientes = ['Comer', 'Tarea', 'Proyecto', 'Estudiar JS'];

pendientes.forEach( (pendiente, indice) =>{
    console.log(`${indice} - ${pendiente}`)}
);

const carrito = [
    {nombre:'Monitor de 27 Pulgadas', precio:500},
    {nombre:'Monitor de 32 Pulgadas', precio:700, descuento:true},
    {nombre:'Mouse Gamer', precio:450},
    {nombre:'Mousepad', precio:200},
    {nombre:'Laptop Gamer', precio:3500},
];


carrito.forEach((producto)=>{
    console.log(producto.nombre);
});

//Agrega un arreglo nuevo
carrito.map((producto)=>{
    console.log(producto.nombre);
});