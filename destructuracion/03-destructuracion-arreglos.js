let frutas = ["banano", "pera", "uva"];

// Destructuración de arreglos
let [fruta1, fruta2] = frutas;

console.log(fruta1);
console.log(fruta2);

// se pueden obtener el último elemento eliminando los primeros dos
let [, , fruta3] = frutas;
console.log(fruta3);

let otraFruta = "manzana";
// al hacer la destructuración la variable otraFruta cambia de valor por la posición del arreglo frutas
[otroFruta] = frutas;
console.log(otroFruta);


let a = 1;
let b = 2;
// con la destructuración puedo intercambiar los valores de a y b
[a, b] = [b, a];

console.log(a);
console.log(b);