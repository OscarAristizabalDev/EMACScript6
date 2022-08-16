// Forma de mandar los parametros como opcionales o por defecto
function saludo(mensaje = "Hola Mundo", tiempo = 1500) {
    setTimeout(function() {
        console.log(mensaje);
    }, tiempo)
}
saludo();


// Forma de enviar funciones y objetos como parametros opcionales o por defecto
function cantar(fn = cantarTemporal, persona = { nombre: "Oscar" }) {
    fn();
    console.log(persona);
}

function cantarTemporal() {
    console.log("Hola cantar temporar")
};

function cantarTemporal2() {
    console.log("Hola cantar 2")
};

let persona = {
    nombre: "Andres"
}

cantar(cantarTemporal2, persona);