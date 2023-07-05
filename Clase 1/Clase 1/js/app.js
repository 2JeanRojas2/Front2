console.log("Hola");
const nombre = "Jean";
alert(`Gracias por ingresar ${nombre}`);


// Array de numeros
const numeros = [1, 2, 4, 8];
// Variable acumuladora para guardar el resultado de la suma
let acum = 0;
// Bucle para recorrer el array de numeros 
for (let i = 0; i < numeros.length; i++) {
    // Se le suma cada iteracion que recorre el bucle a la variable con el acumulador  
    acum += numeros[i];
    // se muesta por consola cada iteracion del acumulador 
    console.log(acum);
};