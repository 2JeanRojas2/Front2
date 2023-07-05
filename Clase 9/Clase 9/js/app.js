window.addEventListener('load', function(){
    
    //ejecuta una funcion despues de un determinado intervalo de tiempo
    // setTimeout(function() {
        //     alert("Bienvenido al cronometro")
        // }, 1000);
        
    let tiempo = 2000;
    let contador = 0;
    const btnPause = this.document.querySelector('#pause');
    const btnReplay = this.document.querySelector('#replay');
    const fast = this.document.querySelector('#fast');
    const btnStop = this.document.querySelector('#stop');
    const valor = this.document.querySelector('#valor');

    let cronometro = setInterval(function() {
        renderizar();
    }, tiempo);

    //definimos la funcionalidad de pausar --------------
    btnPause.addEventListener('click', function() {
        //frenamos el cronometro
        clearInterval(cronometro);
        console.log("PAUSA");
    })

    //definimos nuestra funcion de reanudar --------------
    btnReplay.addEventListener('click', reanudarCronometro);
    function reanudarCronometro() {
        cronometro = setInterval( renderizar, tiempo);
        console.log("REANUDAR");
    }
    
    //definimos la funcionalidad de acelerar
    let multiplicador = 2;
    fast.addEventListener('click', function(evento){
        //actualizamos el valor del boton
        multiplicador = multiplicador*2;
        evento.target.innerText = `x${multiplicador}`
        //cambiamos el valor de milisegundos
        tiempo = tiempo/2;
        //frenar el intervalo anterior con el tiempo mas lento
        clearInterval(cronometro);
        //definir el intervalo pero con el nuevo tiempo de velocidad
        cronometro = setInterval( renderizar, tiempo);
        console.log("Acelerar");
    });

    //definir la funcionalidad de reiniciar
    btnStop.addEventListener('click',function() {
        clearInterval(cronometro);
        contador = 0;
        valor.innerText = contador;
        multiplicador = 2;
        fast.innerText = `x${multiplicador}`
    })

    function renderizar() {
        console.log(contador);
        contador++;
        valor.innerText = contador;
    }
});