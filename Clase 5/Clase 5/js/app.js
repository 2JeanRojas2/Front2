let items = document.querySelectorAll('li');

items[0].innerHTML = "El <strong>52%</strong> del tráfico de todo Internet es creado por Bots (entre inofensivos y maliciosos).";

if(confirm("Desea ver un parrafo amarillo?")){
    items[1].style.backgroundColor = "yellow"
}

// Recorre la lista de items y por cada item 
items.forEach( item =>{
    //chequeamos si tenia mas de 60 caracteres
    if(item.innerText.length > 60){
        item.style.fontWeight = "bold";
    }else{
        item.style.color = "blue";
    }

    //chequear si no tiene ninguna clase
    if(item.classList.length == 0){
        item.classList.toggle('impar');
    }
})


