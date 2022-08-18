let autoGuardado = {
    archivo: "app.js",
    cursor: {
        linea: 7,
        columna: 16
    },
    ultimoArchivo: {
        archivo: "index.html",
        cursor: {
            linea: 8,
            columna: 20
        }
    },
    otroNodo: {
        subNodo: {
            cursor: {
                linea: 11,
                columna: 11
            }
        }
    }
};


let { cursor: primerCursor } = autoGuardado;
console.log(primerCursor.linea);

// destructuración de objetos aninados
let { ultimoArchivo: { cursor } } = autoGuardado;
console.log(cursor);

// destructuración de objetos aninados
let { otroNodo: { subNodo: { cursor: otroNodo } } } = autoGuardado;
console.log(otroNodo);

// Esta forma es sin realizar la destructuración
let otroNodo2 = autoGuardado.otroNodo.subNodo.cursor;
console.log(otroNodo2);