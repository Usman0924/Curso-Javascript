//Objetos dentro de otro objeto
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 30,
    disponible: true,
    informacion:{
        peso: '1KG',
        medida: '1m', 
        fabricacion:{
            pais: 'China'
        }
    }
}

console.log(producto);
console.log(producto.informacion);
console.log(producto.informacion.fabricacion.pais);
// console.log(producto.informacion.peso);
