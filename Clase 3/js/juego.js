//REQUERIMIENTOS
/*
✔- necesitamos poder elegir entre 3 opciones(p,p o t)
✔- relacionar cada opcion con un valor
✔- el usuario puede elegir
✔- la computadora va a jugar un opcion aleatoria
✔- hacer comparaciones de las elecciones
✔- mostrar un resulta final

*/

//mensajes constantes
const MSJ_WIN = "Triunfo! 😎";
const MSJ_TIE = "Empate!";
const MSJ_LOSE = "Derrota! 😑";
const MSJ_INICIO = "Ingrese 1 para piedra, 2 para papel o 3 para tijera.";
const CANT_PARTIDAS = 3;

//puntajes
let puntajes = {
    usuario: 0,
    computadora: 0
};

for (let i = 0; i < CANT_PARTIDAS; i++) {

    //jugada computadora
    const computadora = parseInt(Math.random() * 3 + 1);

    //jugada del usuario
    let usuario = 0;
    do {
        usuario = parseInt(prompt("Ingrese 1 para piedra, 2 para papel o 3 para tijera."));

    } while (!(usuario >= 1 && usuario <= 3))
    //negacion !(usuario>=1 && usuario<=3)
    //afirmacion usuario<1 || usuario>3

    // Logica de comparaciones
    if (usuario == computadora) {
        alert(MSJ_TIE);
        puntajes.usuario += 1;
        puntajes.computadora += 1;
    } else if ((usuario == 1 && computadora == 3) || (usuario == 2 && computadora == 1) || (usuario == 3 && computadora == 2)) {
        alert(MSJ_WIN);
        puntajes.usuario += 1;
    } else {
        alert(MSJ_LOSE);
        puntajes.computadora += 1;
    }

    //puntajes
    console.table(puntajes);
}

puntajes.usuario == puntajes.computadora ? alert("Esto fue un empate") : puntajes.usuario > puntajes.computadora ? alert("Ganaste la partida global") : alert("Perdiste en el global")

// opcion con IF clasico
// if (puntajes.usuario == puntajes.computadora) {
//     alert("Esto fue un empate")
// } else if (puntajes.usuario > puntajes.computadora) {
//     alert("Ganaste la partida global")
// } else {
//     alert("Perdiste en el global")
// }