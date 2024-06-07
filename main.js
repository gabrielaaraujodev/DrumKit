let keys = document.getElementsByClassName('teclas');

let audios = document.getElementsByTagName('audio');

document.addEventListener('keydown', 
  (e) => { 
    for(var i = 0; i < keys.length; i++) {

      if(parseInt(keys[i].getAttribute("id")) === e.keyCode && parseInt(audios[i].getAttribute("id")) === e.keyCode) {
        keys[i].classList.add('estiloTecla');
        audios[i].currentTime = 0;
        audios[i].play();       
        retiraTransicao(keys[i]);
        } else {
          keys[i].classList.remove('estiloTecla');
        }      

    }
  }
);


function retiraTransicao(teclaApertada) {
  teclaApertada.addEventListener('transitionend', 
    () => {
      if(teclaApertada.classList.contains('estiloTecla')) {
        teclaApertada.classList.remove('estiloTecla')
      }
    }
  )
}
