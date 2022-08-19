// inicializando un mapa con valores por defecto
// un unico arreglo, con arreglos de los valores
let mapa = new Map([
    ["nombre", "fernando"],
    ["edad", 31]
]);

// iterar con forEach
mapa.forEach(function(valor, key, mapaOrigen) {
    console.log(`Llave: ${key}, valor: ${valor}`)
});

// iteranco con funciones de flecha
mapa.forEach((valor, llave) => console.log(`Llave: ${llave}, valor: ${valor}`))