//Mayor o igual, else if
const dinero = 2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
const totalAPagar = 300;
const tarjeta = true;

if(dinero >= totalAPagar){
    console.log('Podemos pagar');
}
else if(tarjeta){
    consoe.log('Se puede pagar porque tengo tarjeta')
}
else{
    console.log('No podemos pagar');
}