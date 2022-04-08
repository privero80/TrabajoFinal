let botonInicio = document.getElementById('play');
let botonPausa = document.getElementById('pausa');
let video = document.querySelector('video');

botonInicio.addEventListener('click',()=>{
    video.play();
});

botonPausa.addEventListener('click',()=>{
    video.pause();
});

window.addEventListener('load',()=>{
    document.getElementById('duracion').innerHTML=` Duracion video : ${video.duration}`;
});