let nombre = "Maria";
let apellido = "Perez";

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

// manejo de template literales
let nombreCompleto2 = `El nombre completo es : ${nombre} ${apellido}`
console.log(nombreCompleto2);

// también se puede utilizar con funciones 
function obtenerNombre() {
    return "Oscar Aristizabal";
}

let nombreCompleto3 = `El nombre completo es : ${obtenerNombre()} ${1+3}`;
console.log(nombreCompleto3);

// Permite manejar multilineas sin necesidad de usar \n

let multiLinea = `<h1>Titulo</h1>
<p>Hola mundo</p>`;
console.log(multiLinea);