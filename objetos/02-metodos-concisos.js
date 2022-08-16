//ES5 metodos concisos
var persona = {
    nombre: "Oscar",
    //  se requiere colocar function
    getNombre: function() {
        console.log(this.nombre);
    }
}
persona.getNombre();

//ES6 metodos concisos

var personaDos = {
    nombre: "Oscar Dos",
    //  no se requiere colocar function
    getNombre() {
        console.log(this.nombre);
    }
}
personaDos.getNombre();