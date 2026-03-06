//eventos de los inputs
const busqueda = document.querySelector('.busqueda');

//Cuando estas escribiendo
// busqueda.addEventListener('keydown',()=>{
//     console.log('Escribiendo...');
// })

//Cuando escribes y suelta esa tecla
// busqueda.addEventListener('keyup',()=>{
//     console.log('Escribiendo...');
// })

//cuando das clic y te sales
// busqueda.addEventListener('blur',()=>{
//     console.log('Escribiendo...');
// })

// busqueda.addEventListener('copy',()=>{
//     console.log('Copiando...');
// })

// busqueda.addEventListener('paste',()=>{
//     console.log('Pegando...');
// })

// busqueda.addEventListener('cut',()=>{
//     console.log('Cortando...');
// })

//escucha todo, copiar, pegar, escribir, menos el blur
busqueda.addEventListener('input',(e)=>{
    if(e.target.value === ""){
        console.log('Fallo la validacion');
    }
})