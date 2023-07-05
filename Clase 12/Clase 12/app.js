
const formulario = document.querySelector('form');
// const form = document.forms[0];
const inputNombre = document.querySelector('#nombre');
const inputContrasenia = document.querySelector('#pass');
const inputTelefono = document.querySelector('#tel');
const checkBoxes = document.querySelectorAll('[name=hobbies]');
// const checkboxes = document.getElementsByName('hobbies');
const radioButons = document.querySelectorAll('[name=nacionalidad]');

const mensajeNombre = document.querySelector('#mensajeNombre');

formulario.addEventListener('submit', function(event){
    // frenamos el envío por defecto
    event.preventDefault();
    console.log("Submit");

    let listadoHobbies = [];
    checkBoxes.forEach( caja =>{
        if(caja.checked){
            listadoHobbies.push(caja.id);
        }
    })
    let nacionalidad;
    radioButons.forEach( button =>{
        if(button.checked){
            nacionalidad= button.id;
        }
    });

    //validar nombre
    if(!validarNombre(inputNombre.value)){
        mensajeNombre.classList.remove('oculto');
        inputNombre.classList.add('error');
    }else{
        mensajeNombre.classList.add('oculto');
        inputNombre.classList.remove('error');
    };
 

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

    let caracteresInvalidos = [ "0","1","2","3","4","5","6","7","8","9",".","-",","];
    // validamos y mandamos true en caso de ser correcto
    // - debe tener un maximo de 20 caracteres y minimo de 3
    if(nombre.length < 3 || nombre.length > 20){
        resultado = false;
    }
    // - no debe contener un caracter invalido
    caracteresInvalidos.forEach( caracter =>{
        if(nombre.includes(caracter)){
            resultado = false;
        }
    });

    return resultado;
}