let numeros = [100, 20, 30, 50, 200];

// for loop
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
};

// for in
for (const i in numeros) {
    console.log(numeros[i]);
};

// for of
for (let i of numeros) {
    console.log(i);
};

// Arreglo de objetos
let personas = [
    { nombre: "Fernando", edad: 30 },
    { nombre: "Maria", edad: 18 },
    { nombre: "Susuna", edad: 25 },
    { nombre: "Victor", edad: 40 },
    { nombre: "Juan", edad: 15 }
];

// for of
for (per of personas) {
    console.log(per.nombre, per.edad);
}

// Set 
let personasSet = new Set();
personasSet.add({ nombre: "Fernando", edad: 31 });
personasSet.add({ nombre: "Marial", edad: 28 });
personasSet.add({ nombre: "Melissa", edad: 15 });
personasSet.add({ nombre: "Pedro", edad: 51 });
personasSet.add({ nombre: "Jesus", edad: 63 });

// for of
for (per of personasSet) {
    console.log(per.nombre, per.edad);
}

// Map 
// los mapas no tiene nombres propiedad repetidas
let personasMap = new Map([
    ["nombre", "fernandno"],
    ["apellido", "gomez"]
]);

// for of
for (let per of personasMap) {
    console.log(per);
}