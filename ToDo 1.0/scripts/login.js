window.addEventListener('load', function () {
    

    const formulario = document.forms[0];
    const inputEmail = document.querySelector("#inputEmail");
    const inputPassword = document.querySelector("#inputPassword");

    const apiUrl = ' https://ctd-todo-api.herokuapp.com/v1/users/login'

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const resultadoValidacion = validarNoVacio(inputEmail.value) && validarNoVacio(inputPassword.value);
        
        if (resultadoValidacion) {
            const datosUsuario = normalizacion(inputEmail.value, inputPassword.value);
            console.log(datosUsuario);
            fetchApiLogin(apiUrl, datosUsuario);
        } else {
            console.log("No paso alguna validacion");
        }
        formulario.reset();

    })

})


function validarNoVacio(dato) {
    let resultado = true;

    if (dato === "") {
        resultado = false;
    }

    return resultado;
}

function normalizacion(email, password) {
    const usuario = {
        email: email.toLowerCase().trim(),
        password: password.trim()
    }
    return usuario;
}

function fetchApiLogin(url, payload) {

    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }
    
    fetch(url, settings)
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(data)
            if (data.jwt) {
                localStorage.setItem('jwt', data.jwt);
                location.href = './mis-tareas.html';
            } else {
                alert("Alguno de los datos es incorrecto");
            }
        })
}