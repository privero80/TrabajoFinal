let botonInicio = document.getElementById('play');
let botonPausa = document.getElementById('pausa');
let video = document.querySelector('video');

botonInicio.addEventListener('click',()=>{
    video.play();
});

botonPausa.addEventListener('click',()=>{
    video.pause();
});

let duracionVideo = document.querySelector('.duracion');

duracionVideo.textContent=`Duracion Video: ${video.duration}`;