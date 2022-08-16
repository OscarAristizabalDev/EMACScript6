// ES5
function mezclar(objetoReceptor, objetoDonador) {
    Object.keys(objetoDonador).forEach(function(key) {
        objetoReceptor[key] = objetoDonador[key];
    });
    return objetoReceptor;
}

var objetoReceptor = {};
var objetoDonador = {
    nombre: "mi-archivo.js"
};

console.log(mezclar(objetoReceptor, objetoDonador));


// ES6 nos permite utilizar el metodo Object.assign para pasar los valores de un objeto a otro

console.log(Object.assign(objetoReceptor, objetoDonador));