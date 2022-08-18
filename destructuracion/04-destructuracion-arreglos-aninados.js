let colores1 = ["rojo", ["verde", "amarillo"], "morado", "naranja"];

// destructuración de arreglos aninados
let [color1, [color2]] = colores1;

// console.log(color1);
// console.log(color2);



let colores2 = ["rojo", "verde", "amarillo", "morado", "naranja"];
// Se toma el primer color, y los demas colores se dejan en un arreglo
// La destructuración con el operador REST solo funciona para los arreglos,
// No funciona para los objetos
let [colorPrincipal, ...demasColores] = colores2;

console.log(colorPrincipal);
console.log(demasColores);