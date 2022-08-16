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