// Usando valores raw

let mensaje = `Hola \nMundo\\`;
let mensaje2 = String.raw `Hola \nMundo\\`;
let mensaje3 = String.raw "Hola \nMundo\\"; // solo funciona con templates literales


console.log(mensaje);
console.log(mensaje2);