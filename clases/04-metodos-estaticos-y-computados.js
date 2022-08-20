// Metodos estaticos y metodos computados

let nombreMetodo = "gritarNombre";

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }

    decirNombre() {
        console.log(this.nombre);
    }

    // los metodos computados, son metodos cuyo nombre se pueden definir desde un variable
    [nombreMetodo]() {
        console.log(this.nombre.toUpperCase());
    }

    // Un metodo estatico permite ejecutar la funcion de la clase sin de necesidad de instanciar la clase
    static crear(nombre) {
        return new Persona(nombre);
    }
}

let oscar = Persona.crear("oscar");
console.log(oscar);


oscar.crear("pablo"); // un metodo static no se puede llamar desde la instancia de una clase