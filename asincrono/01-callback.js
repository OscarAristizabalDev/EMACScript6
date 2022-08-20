// un callback es simplemente un llamada que se realiza a la función enviada como parametro
// el parametro callback recibe simplemente una función

const getUsuarioById = (id, callback) => {
    const usuario = {
        nombre: 'Oscar',
        id
    };

    if (id === 20) {
        // simplemente se simula el error llamando el callback y se envía el error
        // el primer parametro es un error, no hay necesidad de mandar el usuario como segundo parametro
        callback(`El usuario con el id ${id}, no existe`);
    } else {
        // en este punto del codigo se ejecuta el callback, el cual llama a la funcion enviada en el metodo de la
        // getUsuarioById como callback
        // se envía el error como null
        // se envía el usuario como segundo parametro
        callback(null, usuario);
    }


};

getUsuarioById(20, (err, usuario) => {
    if (err) {
        return console.log(err);
    }
    console.log("Usuario de base de datos: ", usuario)
});