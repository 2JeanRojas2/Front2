let elementos = document.querySelectorAll('li');

let pregunta = confirm("Desea ver el texto en mayuscula?");

if(pregunta){
    //recorremos los items
    elementos.forEach( item =>{
        console.log(item.innerText);
        item.innerText = item.innerText.toLocaleUpperCase();
    });

    document.body.style.backgroundColor="white"
}

