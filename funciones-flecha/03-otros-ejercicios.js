// ES5, hay cambios en el objeto this
var manejador = {
    id: "123",
    init: function() {
        document.addEventListener("click", (function(event) {
            this.clickEnPagina(event.type)
        }).bind(this), false)
    }, // fin del init
    clickEnPagina: function(type) {
        console.log("Manejando " + type + " para el id: " + this.id);
    }
}

manejador.init();

// ES6
var manejador2 = {
    id: "1235",
    init: function() {
        document.addEventListener("click",
            event => this.clickEnPagina(event.type));
    }, // fin del init
    clickEnPagina: function(type) {
        console.log("Manejando " + type + " para el id: " + this.id);
    }
}

manejador2.init()



////

var restar = (a, b) => a - b;
console.log(typeof restar); // muestra de que tipo es restar
console.log(restar instanceof Function); // devuelve true o false si es una instacion de una funcion


// var restar2 = new restar(1, 2) // generar error porque una funcion de flecha no tiene constructor
// var restar2 = restar(1, 2) // funciona correctamente


((a, b) => {
    console.log(arguments[0]) // las funciones de flecha no maneja arguments
})();