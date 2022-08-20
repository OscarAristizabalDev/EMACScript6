// async y await
// Sirve para dar espera a que se ejecuta el codigo para luego continuar con las siguientes lineas
const getNombre = async() => {

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fernando');
        }, 3000)
    });

    return promise;
}

const saludo = async() => {
    const nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo().then(mensaje => {
    console.log(mensaje);
});