// for(let i = 0; i < 10; i++){
//     if(i === 5){
//         console.log('CINCO');
//         continue;
//     }
//     console.log(`Numero ${i}`);
// }

const carrito = [
    {nombre:'Monitor de 27 Pulgadas', precio:500},
    {nombre:'Monitor de 32 Pulgadas', precio:700, descuento:true},
    {nombre:'Mouse Gamer', precio:450},
    {nombre:'Mousepad', precio:200},
    {nombre:'Laptop Gamer', precio:3500},
];

for(let i = 0; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El artículo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}