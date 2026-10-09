//Ejercicio 4. Concesionario de vehiculos - Registro ineractivo 

function Vehiculo(marca, modelo, color, motor, puestos) {

    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.motor = motor;
    this.puestos = puestos;

    this.mostrarInfo = function() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}, Motor: ${this.motor}, Puestos: ${this.puestos}`);
    };

    this.cambiarColor = function(nuevoColor) {
        this.color = nuevoColor;
    };

    this.encender = function() {
        console.log(`El vehículo ${this.marca} ${this.modelo} está encendido.`);
    };
}


function crearVehiculo() {

    const marca = prompt("Ingrese la marca:");
    const modelo = prompt("Ingrese el modelo:");
    const color = prompt("Ingrese el color:");
    const motor = prompt("Ingrese el motor:");
    const puestos = Number(prompt("Ingrese el número de puestos:"));

    return new Vehiculo(marca, modelo, color, motor, puestos);
}


const vehiculo1 = crearVehiculo();
const vehiculo2 = crearVehiculo();
const vehiculo3 = crearVehiculo();


vehiculo1.mostrarInfo();
vehiculo1.encender();

vehiculo2.mostrarInfo();
vehiculo2.encender();

vehiculo3.mostrarInfo();
vehiculo3.encender();


vehiculo1.cambiarColor("Negro");

console.log("Después de cambiar el color:");
vehiculo1.mostrarInfo();