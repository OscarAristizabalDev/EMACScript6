// ES5

var persona = {};

var apellido = "apellido";

persona["primer nombre"] = "Fernando";
persona[apellido] = "Herrera";

console.log(persona);
console.log(persona["primer nombre"]);
console.log(persona[apellido]);

// otro ejemplo  ES5
var personaDos = {
    "primer nombre": "Melissa"
};

console.log(personaDos["primer nombre"]);


// ES6 nombre de propiedades computadas o procesadas
let apellidoES6 = "primer apellido";
var personaES6 = {
    "primer nombre": "Oscar", // en ES6 ya se permite
    [apellido]: "Aristizabal" // en ES6 ya se permite
};

console.log(personaES6["primer nombre"]);
console.log(personaES6[apellido]);

let sufijo = " nombre";
let objetoES6 = {
    ["primer" + sufijo]: "Daniela",
    ["segundo" + sufijo]: "Andrea"
}

console.log(objetoES6["primer nombre"]);
console.log(objetoES6["segundo" + sufijo]);