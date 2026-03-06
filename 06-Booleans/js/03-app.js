//Buenas practicas para hacer mejor codigo con booleans
const autenticado =  false;

if(autenticado){
    console.log('Si puede ver Netflix');
}else{
    console.log('No, no puedes verlo');
}

//operador ternario
console.log((autenticado) ? 'Si puede ver Netflix': 'No esta autenticado');