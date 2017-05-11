$(document).ready(function(){
var valscroll = false;
var i=0;

//Hacer desaparecer la publicidad en dispositivo movil//
window.onresize = function() {
    $(window).scroll(function(){
    	if ($(window).width() < 768) {
    		if ($(window).scrollTop() == 0){
				$(".publicidad").show();
			} else  {
				$(".publicidad").hide();
			}
    	} else {
    		$(".publicidad").show();
    	}			
	});	
}
//Activar y desactivar Boton de scroll//
$("#botonscroll").click(function(){
	if (valscroll == false) {
		valscroll = true;
		$(this).html("Scroll activo");
	} else {
		valscroll = false;
		$(this).html("Scroll inactivo");
	}    
});
/*
//cargar contenido json1//
$.getJSON("data/1.json", function(jsonObject) {
	  ponerJSON(jsonObject);
 });
//onclick en botnoticias
 $("#botnoticias").click(function() {
	if (i == 0){
		ponerJSON(i+1);
		i++;
	} else if (i == 1){
		ponerJSON(i+1);
		i++;
		$("#botnoticias").hide();
	} 
 });

function ponerJASON(json){
     $.each( json, function( i, 1 ) {
         $('#masnoticias1').append($('<option>', {text: 1.titulo, 1.imgmid, 1.descripcion, 1.datatime }));
         //"slug" es la parte de la url, por si hay que visitar la página de la comunidad (no va con vuestro proyecto, es un ejemplo)
     }); 
}
*/
});