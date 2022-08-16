function crearPersona(nombre) {
    if (typeof new.target !== "undefined") {
        this.nombre = nombre;
    } else {
        throw new Error('Esta función debe ser utilizada con el new');
    }
}

var persona = new crearPersona("Oscar");
var noEsPersona = crearPersona(persona, "Patricia");