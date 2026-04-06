// Heredar un prototype
function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

//se usa function porque este busca en el objeto actual, mientras que arrow function busca en la ventana global
Cliente.prototype.tipoCliente = function (){
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';
    }else if(this.saldo >5000){
        tipo = 'platinum';
    }else{
        tipo = 'normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}

function Persona(nombre,saldo, telefono){
    Cliente.call(this,nombre,saldo);
    this.telefono = telefono;
}

//Heredar las funciones de cliente
//Importante crear antes de instanciar
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

const sergio = new Persona('Sergio', 2000, '867-228-1963');

console.log(sergio);
console.log(sergio.nombreClienteSaldo());