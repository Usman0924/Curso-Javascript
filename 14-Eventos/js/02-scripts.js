//Eventos con el mouse
const nav = document.querySelector('.navegacion');

//registrar un evento
nav.addEventListener('mouseout',()=>{
    console.log('Saliendo de la navegacion');

    nav.style.backgroundColor = 'transparent';  
})

// nav.addEventListener('mouseenter',()=>{
//     console.log('Entrando en la navegacion');

//     nav.style.backgroundColor = 'white';  
// })

nav.addEventListener('mouseoff',()=>{
    console.log('Entrando en la navegacion');

    nav.style.backgroundColor = 'white';  
});

//mousedowm - similar al click
//click
//dblclick - doble click
//mouseup -cuando sueltas el mouse