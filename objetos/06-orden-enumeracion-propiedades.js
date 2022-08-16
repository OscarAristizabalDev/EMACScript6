// Orden de enumeración de las propiedades de los objetos 
// 1. Todas las llaves van en orden ascendente 
// 2. Todas las llaves tipo string van ordenadas de la manera que fueron agregadas al objeto
// 3. Todos los simbolos en el orden que fueron agregados

var objetoPrueba = {
    c: 1,
    0: 1,
    x: 1,
    15: 1,
    r: 1,
    3: 1,
    b: 1
};

objetoPrueba.d = 1;
objetoPrueba["2"] = 1;
objetoPrueba["a"] = 1;

console.log(Object.getOwnPropertyNames(objetoPrueba).join(","));

console.log(Object.keys(objetoPrueba));

console.log(JSON.stringify(objetoPrueba));

for (i in Object.keys(objetoPrueba)) {
    console.log(Object.keys(objetoPrueba)[i]);
}