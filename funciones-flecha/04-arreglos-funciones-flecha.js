var arreglo = [5, 10, 12, 6, 18, 9, 3];
var ordenadoES5 = arreglo.sort(function(a, b) {
    return a - b;
});

console.log(ordenadoES5);


// ES6 ordenar
let ordenadoES6 = arreglo.sort((a, b) => a - b)
console.log(ordenadoES6);