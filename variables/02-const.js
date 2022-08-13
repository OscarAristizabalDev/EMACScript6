const IMPUESTO_SV = 15.2;
// IMPUESTO_SV = 8.3; // genera un error ya que no se permite cambiar el valor de una constante
console.log(IMPUESTO_SV);

if (true) {
    const IMPUESTO_SV = 8.7; // esta es una variable diferente ya que esta en un scope diferente, por lo tanto no genera error al crear una nueva variable con el mismo nombre;
    console.log(IMPUESTO_SV);
}

console.log(IMPUESTO_SV);

const PERSONA = {
    nombre: 'Oscar',
    apellido: 'Aristizabal'
}

PERSONA.nombre = 'Fernando';

console.log(PERSONA);