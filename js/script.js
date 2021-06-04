function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

dataLayer = [];

if(!localStorage.getItem('cookies-aceptadas')){
	avisoCookies.classList.add('activo');
	fondoAvisoCookies.classList.add('activo');
} else {
	dataLayer.push({'event': 'cookies-aceptadas'});
}

botonAceptarCookies.addEventListener('click', () => {
	avisoCookies.classList.remove('activo');
	fondoAvisoCookies.classList.remove('activo');

	localStorage.setItem('cookies-aceptadas', true);

	dataLayer.push({'event': 'cookies-aceptadas'});
});