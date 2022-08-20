// clases como parametros
// Ejemplo 1


function creadorClases(definicionClase) {
    return new definicionClase();
}

let objeto = creadorClases(class {
    constructor() {
        this.nombre = undefined;
        this.edad = 30;
    }

    saludar() {
        console.log("Hola");
    }
});

objeto.saludar();


// Ejemplo 2

class Cuadrado {
    constructor(lado) {
        this.lado = lado;
    }

    getArea() {
        return this.lado * this.lado;
    }
}

function imprimirCuadrado(cuadrado) {
    if (!(cuadrado instanceof Cuadrado)) {
        console.error("El parametro enviando no es un cuadrado");
        return;
    }
    console.log(cuadrado.getArea());
}

let mesa = new Cuadrado(10);
//let mesa = "dasd"
imprimirCuadrado(mesa);