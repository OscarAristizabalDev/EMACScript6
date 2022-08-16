let ajustes = {
    nombre: "Oscar",
    email: "oscar.aristi.jaimes@gmail.com",
    facebook: "oscar.aristi755",
    google: "oscar.asss89",
    premium: true,
    twitter: "oscar_ar45"
};


//ES6 permite la destructuración de objetos
// premium: dePago -> permite cambiar el nombre de la variable 
// twitter = "oscartwitter95" -> permite asignar nuevos campos con su respectivo valor
// let { nombre, facebook, google, premium: dePago, email, twitter = "oscartwitter95" } = ajustes;
// console.log(google, dePago, email, twitter)

let { nombre, email, facebook, premiun, twitter: cuentaTwi = "oscartwitter95" } = ajustes;
console.log(cuentaTwi);