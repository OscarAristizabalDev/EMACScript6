// la destructuración permite especificar los valores a recibir en el objeto como parametro
function crearJugador(nickname, { hp, sp, clase } = { hp: 100, sp: 50, clase: "Mago" }) {
    console.log(nickname, hp, sp, clase);
};

crearJugador("strider", {
    hp: 500,
    sp: 100,
    clase: "Warrior"
});