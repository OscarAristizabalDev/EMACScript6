// los sets son una lista ordenada de valores sin duplicados 
// Permite un rapido acceso a la data que contienen

let items = new Set();

items.add(10);
items.add(12);
items.add(9);
items.add(7);
items.add(7); // no va agregar un nuevo siete, simplemente lo ignora
items.add("7"); //  si lo inserta ya que es diferente al numero 7
items.add("7"); // lo ignora porque ya esta creado

console.log(items);
console.log(items.size)

// Se puede crear un set en base a arreglos
// No va a insertar los valores repetidos
let datos = new Set([1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 7, 7, 7, 7]);
console.log(datos);
console.log(datos.size);


let valores = new Set([1, 2, 3, 4, 5, 6, 7]);

console.log(valores.has(7)); // permite buscar si existe el item, retorna true or false

valores.delete(3); // remover items de un set

console.log(valores.size);
console.log(valores);

valores.clear() // limpiar todo el set

console.log(valores.size);
console.log(valores);