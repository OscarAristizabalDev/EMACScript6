let personas = new Set(["Oscar", "Daniela", "Diego"]);

personas.forEach(function(valor, llave, setOriginal) {
    console.log(valor, llave, setOriginal);
    console.log(personas === setOriginal);
});