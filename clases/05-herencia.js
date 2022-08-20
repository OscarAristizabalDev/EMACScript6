// Herencia
// es transferir los propiedades y metodos de una clase padre a una clase hija

class Rectangulo {
    constructor(alto, largo) {
        this.alto = alto;
        this.largo = largo;
    }

    getArea() {
        return this.alto * this.largo;
    }
};


let rectangulo = new Rectangulo(3, 2);

// se debe utilizar la palabra reservada extends
class Cuadrado extends Rectangulo {
    constructor(alto, largo) {
        // se debe utilizar el Super para hereder las propiedades y metodos de la clase padre
        super(alto, largo);
    }
};

let cuadrado = new Cuadrado(3, 3);
console.log(cuadrado.getArea());

console.log(cuadrado instanceof Cuadrado); // true
console.log(cuadrado instanceof Rectangulo); // true