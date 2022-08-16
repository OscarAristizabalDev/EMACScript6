// ES6
// El parametro REST indica que de puede recibir varios argumentos (...)
// Sólo puede existir un parámetro rest en la función
// Debe ir siempre como último último parámetro
function agregarAlumno(arr_alumnos, ...alumnos) {
    console.log(arguments);

    for (let i = 0; i < alumnos.length; i++) {
        arr_alumnos.push(alumnos[i]);
    }
    return arr_alumnos;
}

let arr_alumnos = ["Fernando"];

let arr_alumnos2 = agregarAlumno(arr_alumnos, "Daniela", "Miguel");

console.log(arr_alumnos2);