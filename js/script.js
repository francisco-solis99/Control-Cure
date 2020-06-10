

// obtener los elementos

const services = document.getElementById('Services');
const about =  document.getElementById('aboutUs');
const contact = document.getElementById('contactUs');

const getElements = function(){
    
    let secciones = [services, about, contact];    
    return secciones;
}

// Evaluar el evento scroll

window.addEventListener("scroll", function(){

    let partes = getElements();
    const heightScreen = window.innerHeight;

    let positionYpt1 = partes[0].getBoundingClientRect().top;
    let positionYpt2 = partes[1].getBoundingClientRect().top;
    let positionYpt3 = partes[2].getBoundingClientRect().top;

    // compararar posicion y ejecutar animacion
    validationPos(positionYpt1, positionYpt2,positionYpt3, heightScreen);


    // TODO: TESTEAR ALTURAS
    // console.log('Services ->' +positionYpt1);
    // console.log('About us ->' + positionYpt2);
    // console.log('Contact us ->' + positionYpt3);

});

// funcion para ejecutar la animacion y evaluarla
function validationPos(pY1, pY2, pY3, heightScreen ){
    let partes = getElements();

    if(pY1 < heightScreen){
        partes[0].style.animation = 'toUp 1s ease-in';
    }
    
    if(pY2 < heightScreen){
        partes[1].style.animation = 'toUp 1s ease-in';
    }

    if(pY3 < heightScreen){
        partes[2].style.animation = 'toleft 1s ease-in';
    }

}
























// Posicion en cuando se hace scroll 
// Our services --> 235 
// About us -->  2117
// Contact us--> 2823

// if(window.scrollY > 230 && window.scrollY < 2114 ){
//     console.log('Andas en la secion de servicios')
// }

// if(window.scrollY > 2117 && window.scrollY < 2810 ){
//     console.log('Andas en la secion de acerca de nosotros')
// }

// if(window.scrollY > 2823 ){
//     console.log('Andas en la secion de contactanos')
// }