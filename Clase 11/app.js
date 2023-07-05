
const formulario = document.querySelector('form');
// const form = document.forms[0];
const inputNombre = document.querySelector('#nombre');
const inputContrasenia = document.querySelector('#pass');
const inputTelefono = document.querySelector('#tel');
const checkBoxes = document.querySelectorAll('[name=hobbies]');
// const checkboxes = document.getElementsByName('hobbies');
const radioButons = document.querySelectorAll('[name=nacionalidad]')

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
    })
 
    console.log(normalizar(inputNombre.value, inputContrasenia.value, inputTelefono.value, listadoHobbies, nacionalidad));

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