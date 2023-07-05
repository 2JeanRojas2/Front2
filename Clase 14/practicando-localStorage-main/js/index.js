/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

const formulario = document.querySelector('form');
const inputComentario = document.querySelector('#comentario');
const comentariosContenedor = document.querySelector(".comentarios");
const historialEnMemoria = obtenerComentarios();

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(inputComentario.value);
    guardarComentario(comentario.value);
})
function obtenerComentarios() {
    let historialAlmacenado = JSON.parse(localStorage.getItem('comentario'));
    if (!historialAlmacenado) {
        historialAlmacenado = [];
    }
    return historialAlmacenado;
}

function guardarComentario(comentario) {
    historialEnMemoria.push(comentario);
    localStorage.setItem('comentario', JSON.stringify(historialEnMemoria));
    
}
function renderizarComentarios() {
    for (texto of historialEnMemoria) {
        const p = document.createElement("p")
        p.innerText = texto;
        comentariosContenedor.append(p)
    }
}

renderizarComentarios();
