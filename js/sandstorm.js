//Easter egg
'use strict';

const teksti = document.getElementById("sandstorm");
const audio = new Audio("../../media/sandstorm.mp3");
audio.volume = 0.01;

teksti.addEventListener('mouseenter', function(){
  audio.play();
});
teksti.addEventListener('mouseleave', function(){
  audio.pause();
});