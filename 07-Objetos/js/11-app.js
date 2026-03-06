//Funciones en objetos y acceder a los valores
const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 30,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto ${this.nombre} tiene un precio de ${this.precio}`);
    }
}

producto.mostrarInfo();

