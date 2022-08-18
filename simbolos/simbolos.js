// Parte 1

let primerNombre = Symbol("Primer nombre");
let segundoNombre = Symbol();
let persona = {
    [segundoNombre]: "Herrera"
};

persona[primerNombre] = "Fernando";

console.log(persona[primerNombre]);
console.log(persona[segundoNombre]);
console.log(primerNombre);
console.log(segundoNombre);

let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');

console.log(simbolo1 == simbolo2);
console.log(simbolo1 === simbolo2);
console.log(Object.is(simbolo1, simbolo2));

console.log(typeof primerNombre);

////// Parte 2

let userId = Symbol.for("userId"); // verifica que el simbolo no este creado

let objeto = {};
objeto[userId] = "1234";
console.log(objeto[userId]);
console.log(userId);

let userId2 = Symbol.for("userId");
console.log(userId == userId2);
console.log(userId === userId2);
console.log(Object.is(userId, userId2));

console.log(objeto[userId2]);
console.log(userId2);

let id = Symbol.for("id unico");
console.log(Symbol.keyFor(id)); // se obtiene el id de simbolo

/////// parte 3

let id2 = Symbol.for("id");
let numero = 10;
let texto = "10";
let bool = true;


console.log(numero + texto); // lo concatena
console.log(numero + Number(texto)); // lo suma
console.log("Mi simbolo es: " + String(id2))


///// Parte 4 - recuperando las propiedades simbolo

let id3 = Symbol.for("id3");
let activo = Symbol.for("activo");

let personaDos = {
    [id3]: 123,
    [activo]: true,
    nombre: "Fernando",
    apellido: "Apeliido",
    edad: 31
};

for (key in personaDos) { // aca no aparacen los simbolos
    console.log(key, personaDos[key]);
}

let simbolos = Object.getOwnPropertySymbols(personaDos); // se deben recuperar de esta forma
for (i in simbolos) {
    console.log(i, simbolos[i], Symbol.keyFor(simbolos[i]));
}