let imagenes = [];

//solicitamos las imagenes
for(let i=0; i<3 ;i++){
    let url = prompt("ingrese la url de una imagen");
    imagenes.push(url);
}

//utilizar los links para rellenar los SRC de cada imagen
const nodosImg = document.querySelectorAll('.imagen');
const nodosTarjetas = document.querySelectorAll('.tarjeta');
// const nodosLink = document.querySelectorAll('.tarjeta a');

for(let i=0; i<imagenes.length; i++){
    nodosImg[i].setAttribute('src', imagenes[i]);

    // alternativa dinamica
    const link = document.createElement('a');
    link.setAttribute('href', imagenes[i]);
    link.appendChild(nodosImg[i]);

    nodosTarjetas[i].appendChild(link);


    // alternativa estatica
    // nodosLink[i].setAttribute('href', imagenes[i]);
    // nodosLink[i].setAttribute('target', '_blank');

    //armo el nodo de un parrafo completo
    let nodoItem = document.createElement('li');
    let texto = document.createTextNode(imagenes[i]);
    nodoItem.appendChild(texto);
    
    //selecciono la caja de parrafos
    const cajaParrafos = document.querySelector('.parrafos');
    
    //inserto el parrafo dinamico en el dom
    cajaParrafos.appendChild(nodoItem);
}

