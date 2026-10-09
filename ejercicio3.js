// Ejercicio 3. Plataforma de cursos. Logica de negocio automatica

function Estudiante(nombre, edad, nota){

    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;

    this.aprobado = nota >= 3.0;
    this.mostrarResultado = function(){
        if( this.aprobado){
            console.log(`${this.nombre} aprobó.`);
        } else{
            console.log(`${this.nombre} reprobó.`);
        }

    };
}

const estudiante1 = new Estudiante ("Juliana", 25, 3.9);
const estudiante2 = new Estudiante ("Lorenzo", 21, 2.3);
const estudiante3 = new Estudiante ("Eugenia", 18, 4.8);
const estudiante4 = new Estudiante ("Santiago", 30, 2.9);

estudiante1.mostrarResultado();
estudiante2.mostrarResultado();
estudiante3.mostrarResultado();
estudiante4.mostrarResultado();