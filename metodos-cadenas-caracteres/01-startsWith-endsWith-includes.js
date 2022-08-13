let saludo = 'Hola Mundo !'

// startsWith permite identificar los caractares con lo que empieza una cadena, retorna true o false
console.log(saludo.startsWith("Hola"));

// endsWith permite identificar los caracteres con los que finaliza una cadena, retorna true o false
console.log(saludo.endsWith("!"));

// includes permite identificar si una cadena incluye un caracter, retorna true o false
console.log(saludo.includes("x"));

// Enviando un parametro se especifica si en esa posición se empieza con un caracter, retorna true o false
console.log(saludo.startsWith("Mu", 5));

// Enviando un parametro se especifica si de esa posición en adelante se incluye un caracter, retorna true o false
console.log(saludo.includes("u", 5))