//Agregar un nuevo arreglo con spread operator
const carrito = [];

const producto = {
    nombre: 'Monitor de 32 Pulgadas',
    precio: 300
}

//Forma declarativa sin modificar el arreglo original

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];



console.table(resultado);
