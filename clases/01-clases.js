// Clase es la representación de un objeto en la vida real
// Metodos: acciones que se pueden realizar con ese objeto 
// Herencia: una clase puede heredar las propiedades y metdoso de otra clase
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    decirNombre() {
        console.log(this.nombre);
    }
}

// forma de instanciar clases
let oscar = new Persona("Oscar")
oscar.decirNombre();

console.log(oscar instanceof Persona);
console.log(oscar instanceof Object);

console.log(typeof Persona);
console.log(typeof Persona.prototype.decirNombre);