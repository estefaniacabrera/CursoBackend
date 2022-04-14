class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        console.log(`El nombre del usuario es ${this.nombre} ${this.apellido}`);
    
    }
    addMascotas(mascota) {
        let nuevaMascota = this.mascotas.push(mascota)
        return nuevaMascota
    }
    countMascota() {
        return this.mascotas.length;

    }
    addBook(libro) {
        let nuevoLibro = this.libros
        let agregarLibro = nuevoLibro.push(libro)
        return agregarLibro
    }
    getBookNames() {
    let arrayLibros = this.libros.map(libros2 => {
    return libros2.nombre})

    console.log(arrayLibros)
    }
}
//Instancio la clase
let usuario1 = new Usuario("Estefania", "Cabrera",[{nombre: "El psicoanalista", autor: "John Katzenbach"}], ["perro", "gato"])

usuario1.getFullName()
usuario1.addMascotas("pez");
usuario1.addBook({ nombre: "Jaque al psicoanalista", autor: "John Katzenbach" });
console.log(`La cantidad de mascotas es ${usuario1.countMascota()}`);
usuario1.getBookNames();

console.log(usuario1);
