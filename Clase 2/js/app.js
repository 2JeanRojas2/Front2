let a = parseInt("22");
let b = parseInt(prompt("Ingrese edad"));
let c = parseInt("22" + "150");
let d = parseInt(22 + 150)
let e = parseInt(22 + parseInt("150"));
let f = parseInt(22.55);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

let edad = parseInt(prompt("Ingrese su edad"));
if (edad > 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

const telefono = parseInt(prompt("ingrese su telefono"));

if (isNaN(telefono)) {
    alert("El telefono no es valido");
}

const estudiante = {
    nombre: "Jean",
    edad: 23,
    direccion: {
        calle: 15,
        numero: 8-63
    },
    materias: ["Front", "POO", "Infra", "testing", "DT"]
}

for (propiedad in estudiante) {
    console.log(propiedad);
    console.log(estudiante[propiedad]);
}

for (item of estudiante.materias) {
    console.log(item);
}