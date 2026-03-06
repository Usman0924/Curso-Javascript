const metodoDePago = 'cheque';

switch(metodoDePago){
    case 'contado':
        pagar();
        break;
    case 'tarjeta':
        pagar();
        break;
    case 'cheque':
        pagar();
        break;
    default:
        console.log('Metodo de pago no soportado');
        break;
}

function pagar(){
    console.log(`Se pago con ${metodoDePago}`);
}