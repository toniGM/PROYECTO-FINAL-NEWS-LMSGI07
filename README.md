# PROYECTO-FINAL-NEWS-LMSGI07

## Maquetación del proyecto: 
  Layer design del proyecto encargado por el cliente, consistente en la realización de una pagina web de noticias con espacio para la     publicidad ( en el lado derecho) en version PC y tablet de 300 px de ancho , y para versión móvil de 90px de alto en la parte           superior. Todo ello en RESPONSIVE.
  
  ![Layer Design Proyecto News](doc/newsproyecto.jpg)
  
  
## Diseño para PC y Tablet (+ de 768px)
### Header. Ocupa el ancho de pantalla y de altura adecuada, incluyendo en el: Contenedor para los elementos del header:
  * NAV (Barra de navegación) Fijada arriba aunque se realice scrolling,  que en su interior dispone de:
      * Boton de inicio para recargar la pagina inicial.
      * Boton desplegable "Otros sitios" que nos deja acceder a las webs de donde se han obtenido las noticias.
      * Boton de indentificación que accede a a solicitar "Usuario y Contraseña".
      * Boton de registro (sin función).
      
  * CABEZERA - TITULO.
      * Se utiliza el elemento de Bootstrap "JUMBOTROM" para generar este apartado

### CONTAINER GENERAL. Ocupa el ancho de pantalla y de altura adecuada
   * Container para colocar Boton activar/desactivar Scroll
   * Container PROMO. 
      * Uso de Bootstrap para generar 3 columnas (Grid) con una promoción de la página (Votaciones).
      * Se dejan 300px a la derecha para el container de publicidad.
   * Container NOTICIAS.
      * Con Bootstrap utilizando "article" generando 3 lineas de noticias principales.
      * Se coloca un botón al final del container par recargar más noticias.
      * Se dejan 300px a la derecha para el container de publicidad.
   * Container PUBLICIDAD
      * Se le da una anchura máxima de 300px y se ubica a la derecha.
      
### FOOTER.  Ocupa el ancho de pantalla y de altura adecuada 
   * Uso de Boopstrap. Conteniendo varios links e informacion del creador.
   
   
## Diseño para dispositivos móviles (- de 768px)
### Header. Ocupa el ancho de pantalla y de altura adecuada, incluyendo en el: Contenedor para los elementos del header:
  * NAV (Barra de navegación) Fijada arriba aunque se realice scrolling, pero quedando oculta sus opciones, accesibles mediante un           desplegable.
  * CABEZERA - TITULO.
      * Se utiliza el elemento de Bootstrap "JUMBOTROM" para generar este apartado

### CONTAINER GENERAL. Ocupa el ancho de pantalla y de altura adecuada
   * Container para colocar Boton activar/desactivar Scroll
   * Container PROMO desparece en versión RESPONSIVE. 
   * Container NOTICIAS.
      * Con Bootstrap se colocan las noticias de forma ordenada y con visión correcta una vez hecho responsive.
      * Se ha adptado el tamaño deñ texto y los margenes ha este aspecto.
   * Container PUBLICIDAD
      * Se le da una altura máxima de 90px y desapareciendo al hacer scrolling hacia abajo.
      
### FOOTER.  Ocupa el ancho de pantalla y de altura adecuada 
   * Uso de Boopstrap adecuado a responsive. Conteniendo varios links e informacion del creador.
 


#### Diseño de escritorio ###
El banner para pantallas de 768px a 922px tendra una dimensión de 200px de ancho. para pantallas superiores a 922px el ancho del banner será de 300px.

![Imagen diseño Desktop](doc/DiseñoDesk.png)

#### Diseño de movil ###
Cuando el scrolling no se encuentre en el top de la ventana no se mostrara la publicidad. El menú aparece contraido en un boton y se visualizara pulsando sobre él.

![Imagen diseño movil](doc/DiseñoMov.png)

Cuando el scrolling esté en el top se visualizará el banner de publicidad con una altura de 90px. Se ocultara cuando se haga scrolling hacia abajo y cuando se vuelva al top de la ventana se volverá a visualizar.

![Imagen diseño movil con banner](doc/DiseñoMoovScrolling.png)

Diseño final visualizarlo en https://rawgit.com/am4rtinez/news-lmsgi07/master/news.html.

### Banner publicidad ###
Comprobado que si se tiene un bloqueador de publididad (tipo AdBlock) el elemento del banner no se visualiza.

### Scrolling y botón cargar más noticias ###

Se habilita un elemento button para Activar el scrolling (tambien desactivar) y cargar más noticias. Realizará 2 cargas. El 1.json y el 2.json.

Si se habilita el scrolling cada vez que se se llegue al final de la ventana cargara las nuevas noticias (hasta 2 veces). Una vez realizadas las 2 cargas el boton de más noticias desaparecerá. Se visualizara también en el contenedor de stats el número de noticicas mostradas.

### Inicialización ###
Por defecto se cargan 3 noticias. Las 2 primeras enlazan a news1.xtml y news2.html.
  
  
  
  
  
  
  
  
  
  






## Adecuación del proyecto a las especificaciones del cliente y acabado final.
  * Se ha utilizado un diseño de estilo ligeramente minimalista con uso de paleta de colores adecuada.
  * Se ha realizado separación de los contenedores de noticias y de publicidad.
  * Se han dejado los 300px requeridos en versión PC y tablet, y los 90 px en versión móvil.
  * Desaparece la publicidad fijada arriba en la versón móvil al realizar srcolling hacia abajo.
  * Se han usado las especificaciones requeridas en cuanto a tamaño del título, descripción del artículo de noticias, colocación de la       imagen en el lugar adecuado y presentacion de la fecha y hora de publicación.
  * Todas las noticias tienen el mismo formato, mostando los datos especificados de forma elegante en todo el dispositivo y en todas su     versiones.
  
## Se ha creado una "Branch
  



## Validacion y Minify:


 * http://www.webtoolkitonline.com/json-minifier.html
 * http://jsbeautifier.org/
