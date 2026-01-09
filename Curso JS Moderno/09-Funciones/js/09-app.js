const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id ${id}`)
    },
    pausar: function() {
        console.log(`Pausando...`);
    },
    borrar: function(id) {
        console.log(`Borrando cancion... ${id}`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando playlist ${nombre}`)
    },
    reproducirPlaylist: function(nombreplaylist) {
        console.log(`Reproduciendo playlist ${nombreplaylist} `)
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist("Bachatas 2025");
reproductor.crearPlaylist("Bachatas 2024");
reproductor.reproducirPlaylist("Bachatas 2025");