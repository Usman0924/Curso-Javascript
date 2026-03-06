//Metodos de propiedades

const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproducciendo canción con el id ${id}`),
    pausar: ()=> console.log(`Pausando...`),
    borrar: id => console.log(`Borrando cancion con el id ${id}`),
    crearPlaylist: nombre => console.log(`Se creo el playlist con el nombre ${nombre}`),
    reproduccirPlaylist: nombre => console.log(`Reproducciendo la playlist ${nombre}`),
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion();

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();

reproductor.borrar(30);
reproductor.crearPlaylist('Nuevas');
reproductor.reproduccirPlaylist('viejas');