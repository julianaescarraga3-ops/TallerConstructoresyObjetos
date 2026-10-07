//Ejercicio 2 . Sistema de veterinaria. Encapsulamiento de comportamiento

function Mascota(nombre, especie, edad, peso) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;
    
    this.presentarse = function () {
        return `Hola, soy ${this.nombre}, soy un ${this.especie}, tengo ${this.edad} años,
         y peso ${this.peso} kg.`;
    };
}

const mascota1 = new Mascota("Miaw", "gato", "2", "6");
const mascota2 = new Mascota( "Alex", "perro", "5", "25"); //pesa mucho, por eso va al vet :p
const mascota3 = new Mascota("Pili", "Loro", "1", "0.4");

console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());