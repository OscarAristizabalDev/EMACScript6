// funciona normal con un parametro ES5
var miFuncion2 = function(valor) {
    return valor;
};


// Funcion de flecha con un solo parametro ES6
let miFuncion1 = valor => valor;

console.log(miFuncion1);
console.log(miFuncion2)

// funciona normal con 2 parametros ES5
var sumar2 = function(num1, num2) {
    return num1 + num2;
};

// funcion de flecha con 2 parametros ES6
let sumar1 = (num1, num2) => num1 + num2;


// Funcion normal sin parametros ES5
var saludar2 = function() {
    return "Hola Mundo";
}

// Funcion de flecha sin parametros ES6
let saludar1 = () => "Hola mundo";

// Ejemplo 1 ES5
var saludarPersona = function(nombre) {
    var salida = "Hola, " + nombre;
    return salida;
}

// Ejemplo 1 ES6
let saludarPersona2 = nombre => {
    let salida = `Hola, ${nombre}`;
    return salida;
}

console.log(saludarPersona("Oscar"));
console.log(saludarPersona2("Daniela"));




// Retornar un objeto literar desde una funcion ES5
var obtenerLibro = function(id) {
    return {
        id: id,
        nombre: "Harry Potter"
    }
}

// Retornar un objeto literar desde una funcion ES6
// Se debe regresar entre parentesis
let obtenerLibro2 = id => ({ id, nombre: "Harry Potter 36" });

console.log(obtenerLibro(1));
console.log(obtenerLibro2(25));