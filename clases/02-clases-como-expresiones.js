// clases como expresiones

let Persona = class {
    constructor() {
        this.nombre = '';
        this.edad = 30;
        this.direccion = "dasdjsakdjas";
    }

    decirNombre() {
        console.log("Hola Mundo");
    }
}

// forma de instanciar clases
let oscar = new Persona()
oscar.decirNombre();

console.log(typeof oscar);
console.log(oscar instanceof Object);