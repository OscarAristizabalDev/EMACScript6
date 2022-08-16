let gato = {
    sonido() {
        console.log("Miau!")
    },
    chillido() {
        console.log("Chillido!")
    }
};

let perro = {
    sonido() {
        console.log("Guau!")
    }
};


let angora = Object.create(gato);
console.log(Object.getPrototypeOf(angora) === gato);

angora.sonido();
angora.chillido();

// ES6 setPrototypeOf permite trabaja con herencia en JavaScript
Object.setPrototypeOf(angora, perro); // se incluye en ES6
console.log(Object.getPrototypeOf(angora) === gato);
angora.sonido();
angora.chillido();