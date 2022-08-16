//ES5

var objetoES5 = {
    nombre: "Oscar"
};


//ES6

function crearPersona(nombre, apellido, edad) {
    return {
        nombre,
        apellido,
        edad
    }
}

var persona = crearPersona("Oscar", "Jaimes", 31);
console.log(persona);