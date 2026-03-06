//for of

const pendientes = ['Comer', 'Tarea', 'Proyecto', 'Estudiar JS'];


const carrito = [
    {nombre:'Monitor de 27 Pulgadas', precio:500},
    {nombre:'Monitor de 32 Pulgadas', precio:700, descuento:true},
    {nombre:'Mouse Gamer', precio:450},
    {nombre:'Mousepad', precio:200},
    {nombre:'Laptop Gamer', precio:3500},
];

for(let pendiente of pendientes){
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto);
}