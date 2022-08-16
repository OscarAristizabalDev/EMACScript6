let saludo = 'Hola Mundo !';

// repeat es una función que permite repetir las cantidades que se requira una cadena
console.log(saludo.repeat(3));
console.log("0".repeat(5));

const ESPACIOS = 12;

let nombres = ["Fernando", "Oscar", "Daniela"];
let telefonos = ["111233", "856985", "745214"];

for (i in nombres) {
    let dif = ESPACIOS - nombres[i].length;
    console.log(nombres[i] + " ".repeat(dif) + "|" + telefonos[i]);
}