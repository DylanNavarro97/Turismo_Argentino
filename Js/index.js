window.sr = ScrollReveal();

    sr.reveal(".header, .banner-contenedor",{
        duration: 700,
        origin: 'bottom',
        distance: '0px'
    });

    sr.reveal(".banner-titulo, .banner-texto",{
        duration: 1000,
        origin: 'top',
        distance: '-100px'
    });



// Scroll animado ejemplo
//     const scrollAnimado = (elemento) =>{
//         const destino = document.querySelector(elemento);
//         destino.scrollIntoView({
//             behavior: 'smooth'
//         })
//     }
    

const elSubMenu = document.getElementById('sub-dibujo-links-id')
var animadoBottom = document.querySelectorAll('#contCheck')

function mostrarScrollBottom(){
    let scrollTop = document.documentElement.scrollTop
    for (var i=0; i < animadoBottom.length; i++) {
        let alturaAnimado = animadoBottom[i].offsetTop
        let alturaCuerpoAnimado = animadoBottom[i].offsetHeight
        let entradaMenorMenu = alturaAnimado + alturaCuerpoAnimado-60
        let entradaMayorMenu = alturaAnimado + alturaCuerpoAnimado-81
           
        if(scrollTop > entradaMayorMenu){
        // elSubMenu.style.visibility='visible';
            // elSubMenu.style.position='fixed';
            elSubMenu.style.top='85px'
            elSubMenu.style.left='0%'
            // console.log(alturaAnimado);
            // console.log(alturaCuerpoAnimado);
            // console.log(entradaMayorMenu);
         }else if(scrollTop < entradaMenorMenu){
            elSubMenu.style.left='100%'
            // elSubMenu.style.position='sticky';
            // elSubMenu.style.top='-100';
            // elSubMenu.style.visibility='hidden';
    }
}
}
// window.addEventListener('scroll',mostrarScrollBottom)    
    



var contenedorDeChecks = document.getElementById('contCheck')
var lugaresArticulo = document.getElementById('art-lugar')
var hotelesArticulo = document.getElementById('art-hotel')
var gastronomiaArticulo =document.getElementById('art-gastronomia')

// Efecto de Scroll al articulo
var animado = document.querySelectorAll('#contenedor-main-articulos')
function mostrarScrollAArticulo(){
    // let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop
        let alturaResultado = alturaAnimado - 220
        // console.log(alturaResultado)
        // console.log(animado[i])
        window.scroll({
            top:alturaResultado,
            left: 0,
            behavior:'smooth'
        })
    }
}


// Aplicando el efecto de scroll al articulo
contenedorDeChecks.addEventListener('click', function(e){
    if (e.target.id == 'lugares'){
        // console.log("oa");
        hotelesArticulo.style.display='none'
        lugaresArticulo.style.display='block'
        gastronomiaArticulo.style.display='none'
        mostrarScrollAArticulo()
        

    } else if (e.target.id == 'hoteles'){
        // console.log("hotelespa");
        hotelesArticulo.style.display='block'
        lugaresArticulo.style.display='none'
        gastronomiaArticulo.style.display='none'
        mostrarScrollAArticulo();

    } else if (e.target.id == 'gastronomia'){
        // console.log("gastro");
        hotelesArticulo.style.display='none'
        lugaresArticulo.style.display='none'
        gastronomiaArticulo.style.display='block'
        mostrarScrollAArticulo();

    } else if (e.target.id == 'lugares-sub'){
        hotelesArticulo.style.display='none'
        lugaresArticulo.style.display='block'
        gastronomiaArticulo.style.display='none'
        mostrarScrollAArticulo()
    } else if (e.target.id == 'hoteles-sub'){
        hotelesArticulo.style.display='block'
        lugaresArticulo.style.display='none'
        gastronomiaArticulo.style.display='none'
        mostrarScrollAArticulo()
    } else if (e.target.id == 'gastronomia-sub'){
        hotelesArticulo.style.display='none'
        lugaresArticulo.style.display='none'
        gastronomiaArticulo.style.display='block'
        mostrarScrollAArticulo()
    }  
    
})


// carrusel 
const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

//Cuando hago CLICK en punto
    //Saber la posicion de ese punto
     //Aplicar transform Translate en eje X al grande
    //QUITAR la clase activo de TODOS los puntos
    //AÑADIR la clase activo al punto que hemos hecho click    
    
    //Recorred todos los puntos
punto.forEach( (cadaPunto , i)=> {
    //Asignamos un click a cadaPunto
    punto[i].addEventListener('click',()=>{

         //Recorremos todos los puntos
         punto.forEach ((cadaPunto , i )=>{
            //Quitamos la clase activo a todos los puntos
            punto[i].classList.remove('activo')
        })
        //Añadir la clase activo en el punto que hemos hecho click
        punto[i].classList.add('activo')
        // console.log(punto[i])


        //Guardar la posicion de ese punto

        var windowWidth = window.innerWidth
        let posicion = i
        if (windowWidth <= 825){
            var operacion = posicion * -12.5
        } else {
            var operacion = posicion * -50
        }
    
        
        // console.log(contieneActivo)

        //Cuando la posicion es 0, el transform es 0
        //Cuando la posicion es 1, el transform es -50%
        //Calculando el espacio que debe desplazarse el grande
        // var operacion = posicion *-50
        //Movemos el grande
        grande.style.transform = `translateX(${ operacion }%)`

    })
})

const grupoImagen = document.querySelectorAll('.img')
const grupoImagenGrande = document.querySelectorAll('.img-grande')
const contenedorImagenGrande = document.querySelector('.img-grupos-grandes')


// Darle a Activo a una IMG grande
    grupoImagen.forEach( (cadaImg , i)=> {
    grupoImagen[i].addEventListener('click',()=>{
            grupoImagen.forEach ((cadaImg , i )=>{
            grupoImagen[i].classList.remove('activa')
        })
        grupoImagen[i].classList.add('activa')
        // ClasesDeImagen = grupoImagen[i].classList[1]
        // // console.log(ClasesDeImagen)
        grupoImagenGrande.forEach((imgGrande,i)=>{
            imagenesGrandes[i].classList.remove('activa')
        })  
        imagenesGrandes[i].classList.add('activa')
        contenedorImagenGrande.style.display='block'
        
      }) 
    })



var imagenesGrandes = [
    document.querySelector('.uno'),
    document.querySelector('.dos'),
    document.querySelector('.tres'),
    document.querySelector('.cuatro'),
    document.querySelector('.cinco'),
    document.querySelector('.seis'),
    document.querySelector('.siete'),
    document.querySelector('.ocho')
]

    // const atras = imagenesGrandes[imagenesGrandes.length - 1] 
// function carruselGrande (contenedor){
    document.addEventListener('click',(e)=>{
        if (e.target.id == 'cerrar'){
            contenedorImagenGrande.style.display='none'
        }

        for (imagen of grupoImagen){    
            if(imagen.classList[2] == 'activa'){
                var ordenN = imagen.classList[1]
                var orden = parseInt(ordenN)
            }
        }

        // console.log(orden)

            let atras= document.querySelector('.izquierda'),
            adelante = document.querySelector('.derecha'),
            img = document.querySelectorAll('.img-grande'),
            tgt = e.target

            


            if(e.target.classList[0] == 'boton-izquierda'){
                    // console.log(atras)
                if(orden > 0){

                    for(attraz of grupoImagen){
                        attraz.classList.remove('activa');
                    }

                    for (atrasado of grupoImagenGrande){
                        atrasado.classList.remove('activa');
                    }  
                    console.log(orden)
                grupoImagenGrande[--orden].classList.add('activa');
                grupoImagen[orden].classList.add('activa');    
                } 
                // orden = orden-1

                console.log(orden)
                
                

            } else if (tgt.classList[0] == 'boton-derecha'){
                if(orden <7){

                    for(attraz of grupoImagen){
                        attraz.classList.remove('activa');
                    }

                    for (atrasado of grupoImagenGrande){
                        atrasado.classList.remove('activa');
                    }  
                    console.log(orden)
                grupoImagenGrande[++orden].classList.add('activa');
                grupoImagen[orden].classList.add('activa');    
                } 
            }
     
    })
// }       

// document.addEventListener("DOMContentLoaded", ()=>{
//     let contenedor =  document.querySelector('.art-lugar')

//     carruselGrande(contenedor)

    window.addEventListener('scroll',()=>{
        mostrarScrollBottom()
        contenedorImagenGrande.style.display='none'
    })

  
   

      



// for (imagen of grupoImagenGrande){    
//     for (ordenImg in grupoImagenGrande){
//         if(imagen.classList[2] == 'activa'){
//             let orden = ordenImg
//         }
//     }
// }
  


