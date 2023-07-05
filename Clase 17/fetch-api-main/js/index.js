const boton = document.querySelector(".btnContainer");
const tarjeta = document.querySelector(".tarjeta");

boton.addEventListener('click', function () {
    spiner();
    setTimeout(peticionFetch(),10000);
});
// Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona
function peticionFetch() {
    
    fetch('https://randomuser.me/api/')
        .then(response => {
            return response.json()
        })
        .then(data => {
            //manipulamos la respuesta
            console.log(data)
            renderizarDatosUsuario(data);
        });
}

function spiner() {
    tarjeta.innerHTML = `<img src="https://i.pinimg.com/originals/5c/87/9a/5c879ab8cba794923686df4b950f497b.gif" alt="Spiner">`
}

function renderizarDatosUsuario(datos) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    let dato = datos.results[0];
    tarjeta.innerHTML = `<img src="${dato.picture.large}" alt="imagen Usuario">
    <p>${dato.name.first} ${dato.name.last}</p>
    <p>${dato.email}</p>`
    
}


/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.