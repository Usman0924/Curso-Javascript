//Unir 2 objetos
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 30,
    disponible: true
}

const medidas ={
    peso: '1KG',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas);
console.log(resultado);

//Spread Operator o Rest Operator
//Mas utilizada
const resultado2 = {...producto,...medidas};
console.log(resultado2);