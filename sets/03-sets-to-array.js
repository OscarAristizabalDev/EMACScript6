// Convertir un set a array

let numeros = [1, 2, 3, 4, 5, 6, 7];
let setNumeros = new Set(numeros);

console.log(setNumeros);
// Convertir un set a array de numeros
let arrayNumeros = [...setNumeros];

console.log(arrayNumeros);


let numerosDos = [1, 2, 3, 4, 5, 6, 7, 5, 1];

let arrayNumerosDos = eliminaDuplicados(numerosDos);
// esta funcion permite retornar un array sin tener en cuenta los duplicados
// function eliminaDuplicados(items) {
//     let set = new Set(items);
//     return [...set];
// }

// funcion optimizada
function eliminaDuplicados(items) {
    return [...new Set(items)];
}

console.log(arrayNumerosDos);