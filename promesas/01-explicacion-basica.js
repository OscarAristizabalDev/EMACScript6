function tareaAsincrona() {

    // una promesa recibe una funcion resolve y una funcion reject
    let promesa = new Promise((resolve, reject) => {

        setTimeout(function() {
            console.log("Proceso Asincrono Terminado");
            resolver();
        }, 1300);
    });

    return promesa;
}

// el then permite ejecutar la promesa, la cual recibe una funcion que se va a ejecutar como resolver en
// y va recibir otra funcion que se va a ejecutar como reject;
tareaAsincrona().then(function() {
    console.log("Todo Ok!");
}, function() {
    console.error("Todo Mal!")
});

console.log("Código secuencial");