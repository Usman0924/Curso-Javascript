//for lop
// for(let i = 0; i < 10; i +=2){
//     console.log(`Numero ${i}`);
// }

// for(let i = 1; i <= 20; i ++){
//     if((i % 2) === 0){
//         console.log(`${i} numero par`);
//     }else{
//         console.log(`${i} numero impar`);
//     }
// }

const carrito = [
    {nombre:'Monitor de 27 Pulgadas', precio:500},
    {nombre:'Monitor de 32 Pulgadas', precio:700},
    {nombre:'Mouse Gamer', precio:450},
    {nombre:'Mousepad', precio:200},
    {nombre:'Laptop Gamer', precio:3500},
];

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}