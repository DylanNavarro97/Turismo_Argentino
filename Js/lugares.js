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
let tituloS = document.querySelectorAll('.titulo')
// console.log(tituloS)
let articuloDesplegable = document.querySelectorAll('.articulo-desplegable')
// console.log(articuloDesplegable)


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


let animado = document.querySelectorAll('.contenedor-main-articulos')


function mostrarScrollAArticulo(){
    // let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop
        let alturaResultado = alturaAnimado-85
        // console.log(alturaResultado)
        // console.log(animado.length)
        window.scroll({
            top:alturaResultado,
            left: 0,
            behavior:'smooth'
        })
    }
}

let animadoI = document.querySelectorAll('.contenedor-info-ext')
// console.log(animadoI.offsetTop)
// console.log(ani)
function mostrarScrollAInfo(){
    for (var i=0; i < animadoI.length; i++) {
        let alturaAnimadoI = animadoI[i].offsetTop
        let alturaResultadoI = alturaAnimadoI-85-40
        if(alturaAnimadoI > 10){
            window.scroll({
                top:alturaResultadoI,
                left: 0,
                behavior:'smooth'
            })
        }
        
    }
}

tituloS.forEach((destinoS,i)=>{
    tituloS[i].addEventListener(('click'),()=>{
        tituloS.forEach((oe,i)=>{
            tituloS[i].classList.remove('activo-s')
        })
        tituloS[i].classList.add('activo-s')

        articuloDesplegable.forEach((cadaUno,i)=>{
            articuloDesplegable[i].classList.remove('art-activo')
        })
        articuloDesplegable[i].classList.add('art-activo')
        mostrarScrollAArticulo();

    })
})

let seleccion = document.querySelectorAll('.seleccionado')
let infoMas = document.querySelectorAll('.art-desplegables')
// console.log(infoMas)
// console.log(seleccion)
seleccion.forEach((Info,i)=>{
    seleccion[i].addEventListener(('click'),()=>{
        seleccion.forEach((InfoSel,i)=>{
            seleccion[i].classList.remove('desplegar')
        })
        seleccion[i].classList.add('desplegar')
    

    infoMas.forEach((Informacion,i)=>{
        infoMas[i].classList.remove('info-activa')
    }) 
    infoMas[i].classList.add('info-activa')
    mostrarScrollAInfo()    
    })
})