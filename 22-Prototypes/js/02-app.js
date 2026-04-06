//El problema de no usar prototypes

//Cuando muchas personas mueven el codigo, no saben que funciones son exclusivas de cada objeto

function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const sergio = new Cliente('Sergio', 500);

function formatearCliente(cliente){
    const {nombre,saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa){
    const {nombre,saldo,categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log(formatearCliente(sergio));

function Empresa(nombre,saldo,categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria =categoria;
}

const ccj = new Empresa('codigo con juan',4000, 'cursos en linea');

console.log(formatearEmpresa(ccj));