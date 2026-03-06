//Detener la ejecucion de un if
const autenticado = true;


const puntaje = 500;
revisarPuntaje();

function revisarPuntaje(){
    if(puntaje > 400){
    console.log('Excelente');
    return;
    }
    if(puntaje > 300){
    console.log('Buen puntaje... felicidades');
    return;
    } 
}
