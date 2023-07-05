const formulario = document.querySelector('form');
const botonSubmit = document.querySelector('form button');
const marcoHobbies =  document.querySelector('#marcoHobbies');
// const form = document.forms[0];
const inputNombre = document.querySelector('#nombre');
const inputContrasenia = document.querySelector('#pass');
const inputTelefono = document.querySelector('#tel');
const checkBoxes = document.querySelectorAll('[name=hobbies]');
// const checkboxes = document.getElementsByName('hobbies');
const radioButons = document.querySelectorAll('[name=nacionalidad]');

const mensajeNombre = document.querySelector('#mensajeNombre');

// objeto auxiliar para datos
const datosUsuario = {
    nombre: "",
    contrasenia: "",
    telefono: "",
    hobbies: [],
    nacionalidad: ""
};

/* -------- lanzamos la validacion de nombre cuando salimos del input ------- */
inputNombre.addEventListener('blur', function () {
    datosUsuario.nombre = inputNombre.value
    //validar nombre
    if (!validarNombre(inputNombre.value)) {
        mensajeNombre.classList.remove('oculto');
        inputNombre.classList.add('error');
    } else {
        mensajeNombre.classList.add('oculto');
        inputNombre.classList.remove('error');
    };

});

/* ------ lanzamos validacion en hobbies cuando se realiza algun cambio ----- */
checkBoxes.forEach(box => {

    
    box.addEventListener('change', function () {
        console.log("se hizo un check");

        let ubicacion = datosUsuario.hobbies.indexOf(box.id);
        console.log(ubicacion);

        if (box.checked && ubicacion== -1) {
            datosUsuario.hobbies.push(box.id);
        }else {
            datosUsuario.hobbies.splice(ubicacion,1);
        };

        /* ---------------------- Explicando la linea de codigo --------------------- */
        // 1- guardo en el listado del objeto datosUsuario
        // 2- hacemos un array producto de nuestra NodeList(objeto iterable)
        // 3- usamos el filtro como metodo avanzado de array para obtener unicamente los nodos chequeados
        // 4- recorremos esos nodos para genera un array pero solo de los ids de cada nodo
        // datosUsuario.hobbies = Array.from(checkBoxes).filter(caja => caja.checked).map( caja => caja.id);

        // mostramos visualmente que hay un error
        console.log(datosUsuario.hobbies);
        if(!validarHobbies(datosUsuario.hobbies)){
            marcoHobbies.classList.add('error');
        }else{
            marcoHobbies.classList.remove('error');
        }

        if(datosUsuario.hobbies.length == 4){
            checkBoxes.forEach( nodo => {
                if(!nodo.checked){
                    nodo.disabled = true;
                }
            })
        } else{
            checkBoxes.forEach(box => {
                box.disabled = false;
            })
        }



    });
})


// TODO: revisar los momentos en que se dispara
formulario.addEventListener('change', function() {
    console.log("cambio en el form");

    if(validarHobbies(datosUsuario.hobbies) && validarNombre(datosUsuario.nombre)){
        console.log("todo OKKKK");
        botonSubmit.removeAttribute('disabled');
    }else{
        console.log("NOOOOOOOOO");
    }
})








formulario.addEventListener('submit', function (event) {
    // frenamos el envío por defecto
    event.preventDefault();
    console.log("Submit");

    let nacionalidad;
    radioButons.forEach(button => {
        if (button.checked) {
            nacionalidad = button.id;
        }
    });

    //normalizar
    console.log(normalizar(inputNombre.value, inputContrasenia.value, inputTelefono.value, listadoHobbies, nacionalidad));

    //finalizar
    // formulario.reset();

});

function normalizar(nom, pass, tel, listado, pais) {
    const datos = {
        name: nom.toUpperCase(),
        password: pass,
        phone: tel,
        hobbies: listado,
        country: pais
    };

    return datos;
}

function validarNombre(nombre) {
    let resultado = true;

    let caracteresInvalidos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-", ","];
    // validamos y mandamos true en caso de ser correcto
    // - debe tener un maximo de 20 caracteres y minimo de 3
    if (nombre.length < 3 || nombre.length > 20) {
        resultado = false;
    }
    // - no debe contener un caracter invalido
    caracteresInvalidos.forEach(caracter => {
        if (nombre.includes(caracter)) {
            resultado = false;
        }
    });

    return resultado;
}

function validarHobbies(listado) {
    let resultado = true;

    if (listado.length > 4) {
        resultado = false;
    }

    return resultado;
}