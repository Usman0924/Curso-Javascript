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

//Instanciarlo

const pedro = new Cliente('pedro',6000);
console.log(pedro);
console.log(pedro.nombreClienteSaldo());
pedro.retiraSaldo(1000);
console.log(pedro.nombreClienteSaldo());

pedro.tipoCliente();


function Empresa(nombre,saldo,categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria =categoria;
}

const ccj = new Empresa('codigo con juan',4000, 'cursos en linea');