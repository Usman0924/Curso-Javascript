//Destructuring a objetos anidados
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

const {nombre, precio, disponible, informacion: {medida, fabricacion:{pais}}} = producto;
console.log(pais);