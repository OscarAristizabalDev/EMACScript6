// Map es un nuevo tipo de colección de datos que tiene una llave y un valor
let mapa = new Map();

// añadir datos
mapa.set("nombre", "Fernando");
mapa.set("edad", 31);
mapa.set("apellido"); // al no asignar ningun valor queda como undefined

console.log(mapa);
console.log(mapa.size);

// obtener datos
console.log(mapa.get("nombre"));
console.log(mapa.get("edad"));

// Validar si el dato exite
console.log(mapa.has("nombre")); // true or false
console.log(mapa.has("edad")); // true or false
console.log(mapa.has("apellido")); // true or false

// eliminar un llave
mapa.delete("nombre");
console.log(mapa.has("nombre")); // true or false
console.log(mapa.get("nombre"));


// eliminar solo el valor y uno la llave
mapa.set("edad"); // la edad queda como undefined
console.log(mapa);


// limpiar todo el mapa 
mapa.clear();
console.log(mapa);