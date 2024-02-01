const botaoDisparaTabuadaConsole = document.querySelector('.btn-console');

botaoDisparaTabuadaConsole.addEventListener('click', ()=> {
    const entradaUsuario = parseInt(document.querySelector('#tabuada-number').value);
    mostrarTabuadaNoConsole(entradaUsuario);

});

function mostrarTabuadaNoConsole(numero) {
    if (!isNaN(numero)){
      console.log(`Tabuada do ${numero}`);
      let contador =0;
      while (contador <=10) {
         console.log(`${numero} X ${contador} = ${numero*contador}`);
         contador ++;
        } 
        return;

    }
    console.log('Numero inválido!');
}


const botaoDisparaTabuadaDom = document.querySelector('.btn-dom');

botaoDisparaTabuadaDom.addEventListener('click', () => {
    const entradaUsuario = parseInt(document.querySelector('#tabuada-number').value);
    mostrarTabuadaNoDom(entradaUsuario);
});

function mostrarTabuadaNoDom(numero) {
    const ulTabuada = document.querySelector('.tabuada');
    ulTabuada.innerHTML = ""; 
    if (!isNaN(numero)) {
        let contador = 0;
      while (contador <= 10) {
     const linhaTabuada = document.createElement('li');
     linhaTabuada.textContent = `${numero} X ${contador} = ${numero * contador}`;
     ulTabuada.appendChild(linhaTabuada);
     contador++;
      }
    } 
    else 
    {
     console.log('Numero inválido!');
     const mensagem = document.createElement('li');
     mensagem.textContent = 'Numero inválido!';
     ulTabuada.appendChild(mensagem);
    }
}




    

