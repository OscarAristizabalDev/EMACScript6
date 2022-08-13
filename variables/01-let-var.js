let mensaje = 'hola mundo';
console.log(mensaje)

if (1 === 3) {
    // el inicializador let lo que hace es que construye o crea esa variable unicamente en el scope
    // el let tambien nos obliga a que las variables estén inicializadas antes de ser usadas, y que solo haya una variable con el mismo nombre
    // en el caso de utilizar var nos va a generar undefined pero no genera error como el let, el var permite que varias variables sean nombradas bajo el mismo nombre
    let mensajeDos = 'Hola 2'
}

//console.log(mensajeDos)


let mensajeTres = 'Hola oscar';
if (true) {
    let mensajeTres = 'Hola daniela' // esta variable puede tener el mismo nombre, ya que este declarada en un scope diferente, por tal motivo maneja un espacio diferente en memoria
    console.log(mensajeTres);
}
console.log(mensajeTres);