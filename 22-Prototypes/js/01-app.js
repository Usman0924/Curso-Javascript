// object literal
const cliente = {
    nombre:'juan',
    saldo: 500
};


// programacion orientada a objetos antes
function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const sergio = new Cliente('Sergio', 500);

console.log(sergio);