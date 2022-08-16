let persona = {
    saludar() {
        return "Hola"
    }
}

let amigo = {
    saludar() {
        //return Object.getPrototypeOf(this).saludar(this) + ", saludos!!!"; // ES5
        return super.saludar() + ", saludos!!!" // ES6
    }
}

// amigo herada los metodos de persona
// ES6 setPrototypeOf permite trabaja con herencia en JavaScript
Object.setPrototypeOf(amigo, persona);

console.log(amigo.saludar());