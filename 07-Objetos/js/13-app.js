const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 30,
    disponible: true
}

//Obtenemos las llaves del objeto
console.log(Object.keys(producto));

//Retorna los valores
console.log(Object.values(producto));

//Te retorna todo en pares
console.log(Object.entries(producto));