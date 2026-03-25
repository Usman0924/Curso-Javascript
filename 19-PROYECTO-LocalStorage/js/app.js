// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');

let tweets = [];


// EventListeners
eventListeners();

function eventListeners(){
    //Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet);

    document.addEventListener('DOMContentLoaded',()=>{
        //Si marca null asiganlo como arreglo vacio
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];

        crearHTML();
    })
}





// Funciones

function agregarTweet(e){
    e.preventDefault();

    //textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    
    
    //Validacion
    if(tweet === ""){
        mostrarError('Un mensaje no puede ir vacio');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }

    // añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    
    //Crear html
    crearHTML();

    formulario.reset(); 
}

function mostrarError(error){
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(()=>{
        mensajeError.remove();
    },3000);
}

//muestra un listado de los tweets
function crearHTML(){
    limpiarHtml();


    if(tweets.length > 0){
        tweets.forEach(tweet =>{
            //agregar un boton de eliminar
            const btnEliminar = document.createElement('A');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';

            //Añadir la funcion de eliminar
            btnEliminar.onclick = ()=>{
                borrarTweet(tweet.id);
            }


            // Crear el html
            const li = document.createElement('LI');
            li.textContent = tweet.tweet;

            li.appendChild(btnEliminar);

            listaTweets.appendChild(li);
        })
    }

    sincronizarStorage();
}

function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
}

// agrega los tweets actuales a local storage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function limpiarHtml(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}