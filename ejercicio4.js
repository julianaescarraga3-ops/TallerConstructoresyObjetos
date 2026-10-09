//Ejercicio 4. Biblioteca - Control de Estados Modificables

function Libro(titulo, autor, año, genero) {

    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
    this.genero = genero;
    this.prestado = false;

    this.prestar = function() {
        if (this.prestado === false) {
            this.prestado = true;
        } else {
            alert("El libro ya está prestado.");
        }
    };

    this.devolver = function() {
        if (this.prestado === true) {
            this.prestado = false;
        } else {
            alert("El libro no está prestado.");
        }
    };
}

let libro1 = new Libro(
    "Cien años de soledad",
    "Gabriel García Márquez",
    1967,
    "Novela"
);

console.log(libro1);

libro1.prestar();
libro1.devolver();

