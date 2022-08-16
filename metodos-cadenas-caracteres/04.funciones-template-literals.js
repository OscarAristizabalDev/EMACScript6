let unidades = 5;
costo_unitario = 10;

function etiqueta(literales, ...substituciones) {

    let resultado = "";

    console.log(literales);
    console.log(substituciones);

    for (let i = 0; i < substituciones.length; i++) {
        resultado += literales[i];
        resultado += substituciones[i];
    }

    return resultado;
}

// permite enviar el template literal por una función para luego procesar los valores que se reciben por el template;
let mensaje = etiqueta `${unidades} lapices cuestan ${unidades*costo_unitario} pesos.`;

console.log(mensaje);