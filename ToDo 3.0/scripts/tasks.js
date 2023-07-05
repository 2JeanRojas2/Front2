window.addEventListener('load', function(){
    /* -------------------------------------------------------------------------- */
    /*                            logica de nuestra app                           */
    /* -------------------------------------------------------------------------- */

    const apiBaseUrl = 'https://ctd-todo-api.herokuapp.com/v1';
    const jwt = localStorage.getItem('token');

    const nodoNombreUsuario = document.querySelector('.user-info p');
    const nodoFormulario = document.querySelector('.nueva-tarea');
    const inputNuevaTarea =  this.document.querySelector('#nuevaTarea');

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

        nodoFormulario.reset();
    });








    /* -------------------------------------------------------------------------- */
    /*                                  funciones                                 */
    /* -------------------------------------------------------------------------- */
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
        });
    }

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