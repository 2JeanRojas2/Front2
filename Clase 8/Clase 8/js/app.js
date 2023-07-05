window.addEventListener('load', function () {
    //definimos toda la logica interna aca adentro

    let contador = 0;
    const btnSuma = document.querySelector('#suma');
    const btnResta = this.document.querySelector('#resta')
    const valor = this.document.querySelector('#valor');

    btnSuma.addEventListener('click', sumarUno);
    window.addEventListener('keypress', function (e) {
        //si aprieta A suma
        if(e.key == "a"){
            sumarUno()
        }
    })

    window-this.addEventListener('keydown', function (e) {
        console.log(e);
        //con "shift" se reinicia el contador
        if(e.key == "Shift"){
            contador = 0;
            valor.innerText = contador;
        }
    })

    btnResta.addEventListener('click', function(evento) {
        console.log(evento);
        if(contador>0){
            // resta
            contador -= 1;
            console.log(contador);
            // renderizado
            valor.innerText = contador;
        }
    });

    function sumarUno() {
        //  suma
        contador += 1;
        console.log(contador);
        // renderizado
        valor.innerText = contador;
    }

});