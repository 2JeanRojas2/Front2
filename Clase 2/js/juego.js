let puntuacionCompu = 0;
let puntuacionUsuario = 0;

for (let i = 1; i <= 3; i++) {

    const usuario = parseInt(prompt("Ingrese 1 para piedra, 2 para papel o 3 para tijera."));
    const computadora = parseInt(Math.random() * 3 + 1);

    if (isNaN(usuario)) {
        alert("El dato ingresado no es valido");
    } else if (usuario > 3) {
        alert("Ingrese 1 para piedra, 2 para papel o 3 para tijera.")
    };

    if (usuario == computadora) {
        alert("Empate!")
        puntuacionUsuario++
        puntuacionCompu++
    } else if (usuario == 1 && computadora == 2 ||
        usuario == 2 && computadora == 3 ||
        usuario == 3 && computadora == 1) {
        alert("Derrota! :C")
        puntuacionCompu++
    } else {
        alert("Triunfo! C:")
        puntuacionUsuario++
    }
};

if (puntuacionCompu > puntuacionUsuario) {
    alert("El resultado de la partida fue Derrota!");
} else {
    alert("El resultado de la partida fue Victoria!")
};
