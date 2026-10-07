//Ejercicio 1. Tienda de tecnologia - Moldeado de inventario

function Computador(marca, procesador, ram, precio){
    this.marca = marca;
    this.procesador = procesador;
    this.ram = ram;
    this.precio = precio;

}

const computador1 = new Computador(
    "Asus VivoBook",
    "Ryzen 5",
    "8",
    "1800000"

);
const computador2 = new Computador(
    "HP",
    "Intel core i9",
    "6",
    "2800000"
);

const computador3 = new Computador(
    "Acer",
    "Intel core i7",
    "8",
    "2000000"
);

console.log(computador1);
console.log(computador2 );
console.log(computador3 );
