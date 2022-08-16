let numeros = [1, 2, 3, 1023, 5, 822, 7, 135];


// ES5
//let max = Math.max.apply(Math, numeros);
// ES6
// El operador SPREAD permite especificar un arreglo que será separado y cada item
// enviado será un argumento independiente a la función
let max = Math.max(...numeros);

console.log(max);