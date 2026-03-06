//Metodos de propiedades

const reproductor = {
    reproducir: function(id){
        console.log(`Reproducciendo canción con el id ${id}`);
    },
    pausar: function(){
        console.log(`Pausando...`);
    },
    borrar: function(id){
    console.log(`Borrando cancion con el id ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Se creo el playlist con el nombre ${nombre}`)
    },
    reproduccirPlaylist: function(nombre){
        console.log(`Reproducciendo la playlist ${nombre}`)
    }

}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();

reproductor.borrar(30);
reproductor.crearPlaylist('Nuevas');
reproductor.reproduccirPlaylist('viejas');