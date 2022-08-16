let numeros = [1, 2, 3, 1023, 5, 822, 7, 135];


// ES5
//let max = Math.max.apply(Math, numeros);
// ES6
// El operador SPREAD permite especificar un arreglo que será separado y cada item
// enviado será un argumento independiente a la función
let max = Math.max(...numeros);

console.log(max);


// 1.
// Romper la relación de referencia de objetos
// En javascript todos los objetos son pasados por referencia, es una asignación a la ubicación por memoria
let persona1 = {
        nombre: 'Oscar',
        edad: 35
    }
    //let persona2 = persona1;
    // por medio del operador SPREAD se rompe la relación de referencia de objetos
    // y nos permite tomar solo las propiedades y enviar a la nueva variable
let persona2 = {...persona1 };

persona2.nombre = 'Juan';

console.log(persona1);
console.log(persona2);

//2. 
// Enviar valores de atributos de un objeto a otro utilizando el operador SPREAD
let persona3 = {
    nombre: 'Daniela',
    edad: 45
};

let persona4 = {
    nombre: 'Juan',
    edad: 56,
    direccion: 'Chilacoa',
    conduce: true,
    tieneVehiculo: true,
    esVegetariano: true,
    estaCasado: true
};

persona3 = {
    ...persona4,
    ...persona3,
}

console.log(persona3);
console.log(persona4);