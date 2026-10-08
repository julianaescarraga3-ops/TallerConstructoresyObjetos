// Ejercicio 3. Plataforma de cursos. Logica de negocio automatica

function Estudiante(nombre, edad, nota){

    this.nombre = nombre;
    this.edad = edad;
    this.nota = nota;

    this.aprobado = nota >= 3.0;
    this.mostrarResultado = function(){
        

    };
}