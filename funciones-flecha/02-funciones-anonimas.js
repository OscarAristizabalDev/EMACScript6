// Funcion anonima ES5

var saludar1 = function(nombre) {
    return "Hola " + nombre;
}('oscar');

console.log(saludar1);

// Funcion anonima ES6
var saludar2 = (nombre => `Hola ${nombre}`)("Pablo");
console.log(saludar2);


// NOTA: una funcion anonima es aquella que se ejcuta inmediatamente