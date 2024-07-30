let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
         elementoHTML.innerHTML = texto;
             return;}

function verificarIntento()  
     {let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
         console.log(intentos);
             if (numeroDeUsuario === numeroSecreto)
                 { asignarTextoElemento('p',`¡¡Ganaste!! acertaste en ${intentos} ${(intentos ===1) ? 'vez':'veces'}`);
                     document.getElementById('reiniciar').removeAttribute('disabled')}
                         else  { if (numeroDeUsuario > numeroSecreto) 
                             {asignarTextoElemento('p',`El numero secreto es menor`);}
                                 else {asignarTextoElemento('p',`El numero secreto es mayor`);}}
                                     intentos++;
                                         limpiarCaja();}

function limpiarCaja() {
     document.querySelector('#valorUsuario').value = '';}

function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
          console.log (numeroGenerado);
             console.log (listaNumerosSorteados);


     if (listaNumerosSorteados.length == numeroMaximo)
        {asignarTextoElemento('p', 'Ya se sortearon los 10 numeros maximos');}
              else {if(listaNumerosSorteados.includes(numeroGenerado))
                {return generarNumeroSecreto();}
                     else {listaNumerosSorteados.push(numeroGenerado)}
                         return numeroGenerado;}}

function condicionesIniciales(){
      asignarTextoElemento('h1','Juego del número secreto!');
         asignarTextoElemento('p',"Indica un número del 1 al"  +numeroMaximo);
             numeroSecreto = generarNumeroSecreto();
                  intentos=1;}

function reiniciarJuego() {
    limpiarCaja();
         condicionesIniciales();
             document.querySelector('#reiniciar').setAttribute('disabled','true');
                 console.log("has reiniciado el juego, miedoso");
                     // document.querySelector('#reiniciar').style.display = "none";
                           console.log(intentos);}

condicionesIniciales();




