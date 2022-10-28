class Usuario {

    constructor (nombre, apellido) {

        this.nombre= nombre;
        this.apellido= apellido;

        this.libros= [];
        this.mascotas= [];
    }


    getFullName(){

       console.log(`El nombre del usuario es ${this.nombre} ${this.apellido}.`);

    }

    addMascota(mascota) {

        this.mascotas.push(mascota);

    }

    countMascotas() {

        console.log(this.mascotas.length); 
    }

    addBook(titulo, autor) {

        this.libros.push({titulo,autor})
    }

    getBookNames() {

        return this.libros.map(libros => {console.log([`${libros.titulo}`])})

    }

}

const usuario = new Usuario ('Juan', 'Perez')

usuario.getFullName();
usuario.addMascota('gato');
usuario.addMascota('perro');
usuario.addMascota('perro');
usuario.countMascotas();
usuario.addBook('El Señor de los Anillos', 'Tolkien');
usuario.addBook('La Odisea', 'Homero');
usuario.addBook('Fausto', 'Goethe');
usuario.getBookNames();
