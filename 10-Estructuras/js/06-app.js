//El operador &&
const usuario = true;
const puedePagar = true;

if(usuario && puedePagar){
    console.log('Si puedes comprar');
}else if(!puedePagar && !usuario){
    console.log('No, no puedes pagar');
}else if(!usuario){
    console.log('Inicia sesión o saca una cuenta');
}else if(!puedePagar){
    console.log('Saldo insuficiente');
} 
else{
    console.log('No, no puedes pagar');
}