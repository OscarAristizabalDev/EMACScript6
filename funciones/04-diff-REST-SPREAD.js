// REST juan los elementos en un arreglo
function saludarRest(saludo, ...nombres) {
    for (i in nombres) {
        console.log(`${saludo} ${nombres[i]}`);
    }
}

// SPREAD esparce los elementos como si fueran enviados de manera separada
function saludarSpread(saludo, ...nombres) {
    console.log(`${saludo} ${nombres}.`)
}

// REST
saludarRest("Hola", "Fernando", "Maria", "Susana");

// SPREAD 
let personas = ["Melissa", "Pablo", "Juan"]
saludarSpread("Que tal!", personas);

// SPREAD 
let partes = ["brazos", "piernas"];
let cuerpos = ["cabeza", "cuello", ...partes, "pies", "dedos"];
console.log(cuerpos);