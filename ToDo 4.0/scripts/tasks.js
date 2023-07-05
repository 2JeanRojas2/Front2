const usuarioLoggeado = localStorage.getItem('token');
//chequeamos rapidamente si el usuario está loggeado, sino lo sacamos de la vista
if(!usuarioLoggeado){
    location.replace('/')
};

window.addEventListener('load', function(){
    /* -------------------------------------------------------------------------- */
    /*                            logica de nuestra app                           */
    /* -------------------------------------------------------------------------- */

    const apiBaseUrl = 'https://ctd-todo-api.herokuapp.com/v1';
    const jwt = localStorage.getItem('token');

    const nodoNombreUsuario = document.querySelector('.user-info p');
    const nodoFormulario = document.querySelector('.nueva-tarea');
    const inputNuevaTarea =  this.document.querySelector('#nuevaTarea');
    const btnCerrarSesion = document.querySelector('#closeApp');

    // escuchamos el click para cerrar sesion
    btnCerrarSesion.addEventListener('click', function(){
        if(confirm("¿Desea cerrar sesión?")){
            localStorage.clear();
            location.replace('/');
        }
    });

    /* ------------------- acciones apenas arranca nuestra app ------------------ */
    obtenerDatosUsuario(`${apiBaseUrl}/users/getMe`, jwt);
    obtenerListaTareas(`${apiBaseUrl}/tasks`, jwt);

    nodoFormulario.addEventListener('submit', function(evento){
        evento.preventDefault();

        console.log(inputNuevaTarea.value);

        const nuevaTarea = {
            description: inputNuevaTarea.value,
            completed: false
        };

        crearNuevaTarea(`${apiBaseUrl}/tasks`, jwt, nuevaTarea);
        obtenerListaTareas(`${apiBaseUrl}/tasks`, jwt);

        nodoFormulario.reset();
    });








    /* -------------------------------------------------------------------------- */
    /*                                  funciones                                 */
    /* -------------------------------------------------------------------------- */

    

    /* ---------------------- Pintar las tareas en pantalla --------------------- */
    function renderizarTareas(listado) {

        const nodoTareasPendientes = document.querySelector('.tareas-pendientes')
        const nodoTareasTerminadas = document.querySelector('.tareas-terminadas')
        nodoTareasPendientes.innerHTML = "";
        nodoTareasTerminadas.innerHTML = "";

        listado.forEach( tarea => {
            if(tarea.completed){
                /* ---------------- pintamos en la caja de tareas terminadas ---------------- */
                nodoTareasTerminadas.innerHTML += `
                <li class="tarea">
                    <div class="done"></div>
                    <div class="descripcion">
                        <p class="nombre">${tarea.description}</p>
                        <div>
                        <button><i id="${tarea.id}" class="fas
                        fa-undo-alt change"></i></button>
                        <button><i id="${tarea.id}" class="far
                        fa-trash-alt"></i></button>
                    </div>
                    </div>
                </li>`
            } else {
                nodoTareasPendientes.innerHTML += `
                <li class="tarea">
                    <div class="not-done change" id="${tarea.id}"></div>
                    <div class="descripcion">
                        <p class="nombre">${tarea.description}</p>
                        <p class="timestamp"><i class="far
                        fa-calendar-alt"></i> ${tarea.createdAt}</p>
                    </div>
                </li>`
            }

        })
    }


    /* ---------------------------- POST: crear tarea --------------------------- */
    function crearNuevaTarea(url, token, payload) {
        
        const settings = {
            method: 'POST',
            headers: {
                authorization: token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }

        fetch(url, settings)
        .then( respuesta => respuesta.json())
        .then( data => {
            console.log(data);
        });
    }

    /* ------------------------ GET: obtener lista tareas ----------------------- */
    function obtenerListaTareas(url, token) {
         
        const settings = {
            method: 'GET',
            headers: {
                authorization: token
            }
        }

        fetch(url, settings)
        .then( respuesta => respuesta.json())
        .then( data => {
            console.log(data);
            // cada vez que obtenemos, volvemos a renderizar
            renderizarTareas(data);
        });
    }

    /* --------------------- GET: obtener datos del usuario --------------------- */
    function obtenerDatosUsuario(url, token) {
        
        const settings = {
            method: 'GET',
            headers: {
                authorization: token
            }
        }

        fetch(url, settings)
        .then( respuesta => respuesta.json())
        .then( data => {
            console.log(data);
            nodoNombreUsuario.innerText = data.firstName;
        })
    }


});