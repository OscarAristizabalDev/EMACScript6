let frutas = ["banano", "pera"];

// al no exitir una segunda fruta, en la destructuración se puede asingar un valor por defecto
let [fruta1, fruta2 = "manzana"] = frutas;

console.log(fruta1);
console.log(fruta2);


let opciones = {
    nombre: "Fernando",
    apellido: "Jaimes"
}

// Si no existe la variable apellido en el objeto el valor es Aristi
// Si el atributo existe en el objeto el valor es Jaimes
let { nombre, apellido = "Aristi" } = opciones;
console.log(nombre, apellido);