/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingrese su nombre");
  datosPersona.edad = parseInt(2022 - (prompt("Ingrese su año de nacimiento")));
  datosPersona.ciudad = prompt("Ingresa tu ciudad");
  datosPersona.interesPorJs = confirm("¿Te interesa JavaScript?");
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombre = document.querySelector("#nombre");
  nombre.innerText = datosPersona.nombre;
  let edad = document.querySelector("#edad");
  edad.innerText = datosPersona.edad;
  let ciudad = document.querySelector("#ciudad");
  ciudad.innerText = datosPersona.ciudad;
  let interesPorJs = document.querySelector("#javascript");
  interesPorJs.innerText = datosPersona.interesPorJs ? "Si" : "No";
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let fila = document.querySelector("#fila");
  if (fila.innerHTML <= listado.length){
      listado.forEach(materia => {
      fila.innerHTML +=
      `<div class = 'caja'>
      <img src = "${materia.imgUrl}" alt ="${materia.lenguajes}"></img>
      <p class = 'lenguajes'>${materia.lenguajes}</p>
      <p class = 'bimestre'>${materia.bimestre}</p>
      </div>`
      })
    
  }

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let sitio = document.querySelector("#sitio")
  sitio.classList.toggle("dark");

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
let sobreMi = document.querySelector("#sobre-mi");
document.addEventListener("keydown", function(e){
  if(e.key == "f"){
  sobreMi.classList.remove("oculto")
  }
});