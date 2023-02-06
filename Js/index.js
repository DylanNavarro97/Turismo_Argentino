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



const navLink = document.querySelectorAll('.nav-link')
const check = document.getElementById('check')
let modificarUlRight = document.querySelector('.nav-links')
const header = document.querySelector('.header')

header.addEventListener('click',(e)=>{
    let targetClass = e.target.classList
    console.log(targetClass[0])



    if (check.checked == true){
        // console.log("deu1")
        modificarUlRight.style.left='0'
    } else if (check.checked == false){
        modificarUlRight.style.left='-100%'
    }

    if (e.target.classList[0] == 'inicio'){
        modificarUlRight.style.left='-100%'
        check.checked = false
    }
    
})

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
const grande = document.querySelectorAll('.grande')
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

const punto = document.querySelectorAll('.punto')
// Aplicando el efecto de scroll al articulo
contenedorDeChecks.addEventListener('click', function(e){
    if (e.target.id == 'lugares' || e.target.id == 'lugares-sub'){
        // console.log("oa");
        hotelesArticulo.style.display='none'
        lugaresArticulo.style.display='block'
        gastronomiaArticulo.style.display='none'
        mostrarScrollAArticulo()
        punto.forEach((cadapunto,i)=>{
            punto[i].classList.remove('activo')
        }) 
        punto[0].classList.add('activo')
        grande.forEach((cadaGrande,i)=>{
            grande[i].style.transform = `translateX(0%)`
            })
        

    } else if (e.target.id == 'hoteles' || e.target.id == 'hoteles-sub'){
        // console.log("hotelespa");
        hotelesArticulo.style.display='block'
        lugaresArticulo.style.display='none'
        gastronomiaArticulo.style.display='none'
        mostrarScrollAArticulo();
        punto.forEach((cadapunto,i)=>{
            punto[i].classList.remove('activo')
        }) 
        punto[8].classList.add('activo')
        grande.forEach((cadaGrande,i)=>{
            grande[i].style.transform = `translateX(0%)`
            })
        

    } else if (e.target.id == 'gastronomia' || e.target.id == 'gastronomia-sub' ){
        // console.log("gastro");
        hotelesArticulo.style.display='none'
        lugaresArticulo.style.display='none'
        gastronomiaArticulo.style.display='block'
        mostrarScrollAArticulo();
        punto.forEach((cadapunto,i)=>{
            punto[i].classList.remove('activo')
        }) 
        punto[16].classList.add('activo')
        grande.forEach((cadaGrande,i)=>{
            grande[i].style.transform = `translateX(0%)`
            })
        
    } 
    //else if (e.target.id == 'lugares-sub'){
    //     hotelesArticulo.style.display='none'
    //     lugaresArticulo.style.display='block'
    //     gastronomiaArticulo.style.display='none'
    //     mostrarScrollAArticulo()
    // } else if (e.target.id == 'hoteles-sub'){
    //     hotelesArticulo.style.display='block'
    //     lugaresArticulo.style.display='none'
    //     gastronomiaArticulo.style.display='none'
    //     mostrarScrollAArticulo()
    // } else if (e.target.id == 'gastronomia-sub'){
    //     hotelesArticulo.style.display='none'
    //     lugaresArticulo.style.display='none'
    //     gastronomiaArticulo.style.display='block'
    //     mostrarScrollAArticulo()
    // }  
    
})


// carrusel 
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
        // console.log(posicion)
    
        if (i>=8 && windowWidth <= 825){
            let posicion = i - 8
            var operacion = posicion * -12.5
        }else if (i>=8){
            let posicion = i - 8
            var operacion = posicion * -50
        }

        if (i>=16 && windowWidth <= 825){
            let posicion = i - 16
            var operacion = posicion * -12.5
        }else if (i>=16){
            let posicion = i - 16
            var operacion = posicion * -50
        }
    

        
        grande.forEach((cadaGrande,i)=>{
        grande[i].style.transform = `translateX(${ operacion }%)`
        })
    })
})

const grupoImagen = document.querySelectorAll('.img')
const grupoImagenGrande = document.querySelectorAll('.img-grande')
const contenedorImagenGrande = document.querySelectorAll('.img-grupos-grandes')


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
            grupoImagenGrande[i].classList.remove('activa')
            // console.log(grupoImagenGrande[i])
        })  
        // console.log(grupoImagenGrande[i])
        grupoImagenGrande[i].classList.add('activa')

        contenedorImagenGrande.forEach((grupos,i)=>{
            contenedorImagenGrande[i].style.display='none'
            // console.log(contenedorImagenGrande[i])    
        })

        for (activa of grupoImagenGrande){
            if (activa.classList[2]== 'activa'){
                var orden = parseInt(activa.classList[1])
                // console.log(orden)
            }       
        }
        
        if (orden > 8 && orden <17){
            contenedorImagenGrande[1].style.display='block'
            // console.log(contenedorImagenGrande[1])
        } else if (orden>16 && orden <25){
            contenedorImagenGrande[2].style.display='block'
        } else {
            contenedorImagenGrande[0].style.display='block'
        }   
      }) 
    })




    // const atras = imagenesGrandes[imagenesGrandes.length - 1] 
// function carruselGrande (contenedor){
    document.addEventListener('click',(e)=>{
        if (e.target.id == 'cerrar'){
            contenedorImagenGrande.forEach((cerrarIMG,i)=>{
                contenedorImagenGrande[i].style.display='none'
            })
            
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

            
            for (clase of contenedorImagenGrande){
                claseGrupo = clase.classList[1]
            }

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
                if (contenedorImagenGrande[0].style.display == 'block'){
                    grupoImagenGrande[--orden].classList.add('activa');
                    grupoImagen[orden].classList.add('activa');
                } else if (contenedorImagenGrande[1].style.display == 'block'){
                    grupoImagenGrande[--orden + 8].classList.add('activa');
                    grupoImagen[orden].classList.add('activa');
                } else if (contenedorImagenGrande[2].style.display == 'block'){
                    grupoImagenGrande[--orden + 16].classList.add('activa');
                    grupoImagen[orden].classList.add('activa');
                }
                
                
                if (orden > 0 ){
                   
                }
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

                if (contenedorImagenGrande[0].style.display == 'block'){
                    grupoImagenGrande[++orden].classList.add('activa');
                    grupoImagen[orden].classList.add('activa');
                } else if (contenedorImagenGrande[1].style.display == 'block'){
                    grupoImagenGrande[++orden + 8].classList.add('activa');
                    grupoImagen[orden].classList.add('activa');
                } else if (contenedorImagenGrande[2].style.display == 'block'){
                    grupoImagenGrande[++orden + 16].classList.add('activa');
                    grupoImagen[orden].classList.add('activa');
                }
                } 
            }
     
    })
// }       

// document.addEventListener("DOMContentLoaded", ()=>{
//     let contenedor =  document.querySelector('.art-lugar')

//     carruselGrande(contenedor)

    window.addEventListener('scroll',()=>{
        mostrarScrollBottom()
        contenedorImagenGrande.forEach((cerrarConScroll,i)=>{
            contenedorImagenGrande[i].style.display='none'
        })
        
    })

  
   

      



// for (imagen of grupoImagenGrande){    
//     for (ordenImg in grupoImagenGrande){
//         if(imagen.classList[2] == 'activa'){
//             let orden = ordenImg
//         }
//     }
// }
  


