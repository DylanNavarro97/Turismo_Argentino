window.sr = ScrollReveal();

sr.reveal(".header, .contenedor-art-mas",{
    duration: 300,
    origin: 'bottom',
    distance: '0px'
});

// sr.reveal(".banner-titulo, .banner-texto",{
//     duration: 1000,
//     origin: 'top',
//     distance: '-100px'
// });
var grande = document.querySelector('.grande-selector')
// console.log(grande)
let destinoSelector = document.querySelectorAll('.destino-selector')
// console.log(destinoSelector)
let botonDerIzq = document.querySelectorAll('.boton')
// console.log(botonDerIzq)
destinoSelector.forEach((destino,i)=>{
   
    destinoSelector[i].addEventListener('click',(e)=>{
        
        if(e.target.id == 'btnDerecha'){
            var posicion = 1
        } else if (e.target.id == 'btnIzquierda'){
            var posicion = 0
        }
        // console.log(posicion)
        var operacion = posicion * -50
        // console.log(operacion)

        grande.style.transform = `translateX(${ operacion }%)`
    })
})