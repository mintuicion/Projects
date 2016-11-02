$(document).ready(function(){ /*Le decimos que inicie todo después de que el documento cargue el DOM*/

	function inicializar() {

		var mapa= document.getElementById("mapa"); /*Creamos una var que va a acceder al elemento con ID "mapa"*/
	    navigator.geolocation.getCurrentPosition(mostrarMapa); /*GetCurrentPosition nos da la ubicación del usuario y le pasamos la función mostrarMapa*/

        function mostrarMapa(respuesta){
        	var vacio = []; /*Creamos una variable con un array vacío, que utilizaremos en la línea 86*/
        	var marker;/*Creamos la variable del marcador*/

          	var lat = respuesta.coords.latitude; /*Declaramos una variable y accedemos al objeto coords del parámetro "respuesta", que es donde se encuentra la latitud. Lo mismo para lo longitud. */
          	var lon = respuesta.coords.longitude;

          	LtLn = new google.maps.LatLng(lat, lon); /*Declaramos una variable y convertimos la información anterior a un objeto de Google*/

	      	var objConfig = { /*Declaramos una variable que va a contener la configuración del mapa*/
	        	zoom: 13, /*Zoom (mientras mayor sea más cerca estará)*/
	        	center: LtLn, /*Centrado en base a la latitud y longitud que tenemos*/
	        	scrollwheel: true /*Para desactivar la rueda del ratón cuando pase por encima del mapa.*/
	      	};

	     	var gMapa = new google.maps.Map(mapa, objConfig); /*Creamos el mapa como un nuevo objeto de Google y le pasamos 2 parámetros. El primero es donde se va a mostrar el mapa (como declaramos al principio va a acceder al elemento con id mapa) y el segundo es la configuración del mapa que hemos declarado antes.*/

			var objConfigMarker={ /*Declaramos una variable que va a contener la configuración del marcador del mapa con las siguientes propiedades:*/    
				position: LtLn, /*La posición del usuario (que será la latitud y la longitud)*/
				animation: google.maps.Animation.DROP, /*Con animation DROP indica que el marcador aparecerá desde lo alto del mapa y caerá hasta la posición.*/
				map: gMapa, /*El mapa donde se tiene que mostrar*/
				draggable: false, /*Con draggable false no podemos mover nuestros marcadores por el mapa*/
			}

			var gMarker = new google.maps.Marker(objConfigMarker); /*Creamos el marcador como un nuevo objeto de Google y le pasamos un parámetro con la configuración del marcador que hemos declarado antes.*/

			var prueba = {content: "¡Te encuentras aquí!"}; /*Declaramos una varaible con información que aparecerá en la ventana del marcador */
			var ventana = new google.maps.InfoWindow(prueba); /*Creamos un nuevo objeto de Google de tipo InfoWindow, para que al hacer clic en el marcador nos muestre información. Le pasamos un parámetro que será la variable declarada antes.*/      
				google.maps.event.addListener(gMarker, "click", function(){ /*Para que el marcador responda a un click del usuario y muestre información es necesario realizar el siguiente evento. Como es un objeto de Google es un poco diferente. Utilizamos una función con el escuchador de evento addListener y le pasamos 3 parámetros. El primero es el marcador, el segundo el evento (en este caso onclick) y la siguiente función.*/
					ventana.open(gMapa, gMarker); /*Le pedimos que nos abra el objeto que lleva la información con 2 parámetros. El primero es el mapa donde queremos que aparezca y el segundo el marcador*/				
			});

/*EVENTO ONCHANGE DE LOS BOTONES DEL FILTRO*/

			var distrito= document.getElementById("distrito"); /*Creamos una var que va a acceder al elemento con ID "distrito". Hacemos lo mismo para ciudad y precio*/
			var ciudad= document.getElementById("ciudad");
			var precio= document.getElementById("precio");

			(function(document, $, undefined){/*Hacemos el evento onchange de los 3 botones con jquery*/
				$('#distrito').on('change', function(){obtenerrestaurante();});/*Con Jquery le decimos que al botón de distrito haga un evento onchange (cuando ya has pulsado en el botón y se cambia el valor). Lo mismo para el botón "ciudad" y "precio"*/
				$('#ciudad').on('change', function(){obtenerrestaurante();});
				$('#precio').on('change', function(){obtenerrestaurante();});
			})(document, jQuery, 'undefined');

/*OBTENER CADA UNA DE LAS PROPIEDADES DE LOS ELEMENTOS DEL JSON, COMPARACIÓN CON LOS SELECT Y SI COINCIDEN MOSTRARLOS EN EL MAPA CON UN MARCADOR*/

			function obtenerrestaurante(){
/*Previamente hemos declarado una variable ("marcadores") con todos los restaurantes en json.js*/

				limpiar(); /*Llamamos a la Funcion Limpiar que creamos más adelante*/
				
				var infowindow = new google.maps.InfoWindow(); /*Creamos un nuevo objeto de Google de tipo InfoWindow, para que al hacer clic en el marcador nos muestre información.*/
			    var i; /*Declaramos las variables para el marcador y la iteración*/
			    

			    for (i = 0; i < marcadores.length; i++) { /*Con el bucle for recorremos cada elemento (array) del json.*/

			      	guardardistrito = marcadores[i][3]; /*Vamos a crear una variable para meter la propiedad distrito de cada uno de los elementos del json, que es la posición 3 de cada uno de ellos. Hacemos lo mismo para ciudad y precio.*/
			      	guardarciudad = marcadores[i][4];
			      	guardarprecio = marcadores[i][5];

					var valorbotondistrito = document.getElementById("distrito").value; /*Con esto comparamos los valores de los botones select por su ID*/
					var valorbotonciudad = document.getElementById("ciudad").value;
					var valorbotonprecio = document.getElementById("precio").value;


			      	if (valorbotondistrito === guardardistrito && valorbotonciudad === guardarciudad && valorbotonprecio === guardarprecio) { /*Vamos a crear un bucle en el que si el valor del elemento es igual al que tenemos en el botón en los 3 casos entonces se creará un marcador en el mapa*/

/*CREAR MARCADORES*/

					        marker = new google.maps.Marker({ /*Declaramos una variable que contendrá un nuevo marcador. Tendrá las siguientes propiedades*/
					          	position: new google.maps.LatLng(marcadores[i][1], marcadores[i][2]), /*Creamos un nuevo objeto Google que cogerá las posiciones 1 ("latitud") y 2 ("longitud") de cada elemento del json*/
					          	animation: google.maps.Animation.DROP, /*Con animation DROP indica que el marcador aparecerá desde lo alto del mapa y caerá hasta la posición.*/
					          	map: gMapa, /*Es el mapa en el que se insertará el marcador*/
					          	icon: 'image/marron.png' /*El icono que simbolizará el marcador, en este caso una imagen .png*/
					        });

					        vacio.push(marker); /*Metemos los marcadores que se están creando en el array vacio que creamos para poder referenciarlos luego (Mirar Funcion limpiar)*/
					        

					        google.maps.event.addListener(marker, 'click', (function(marker, i) {/*Para que el marcador responda a un click del usuario y muestre información es necesario realizar el siguiente evento. Como es un objeto de Google es un poco diferente. Utilizamos una función con el escuchador de evento addListener y le pasamos 3 parámetros. El primero es el marcador, el segundo el evento (en este caso onclick) y una función con los parámetros del marcador y la iteración (para que coja el de cada uno).*/
					          	return function() { /*Le pedimos que salga de la función y nos devuelva el valor de la siguiente función*/
					            	infowindow.setContent("<div id=\"content\">" + "<h1>" + marcadores[i][0] + "</h1>" + "<div id=\"bodyContent\">" + marcadores[i][6] + "<p><a href=\"\">" + "Sitio web</a></p>" + "</div>" + "</div>"); /*Le ponemos el contenido de la ventana. Le pedimos la posición 0 y 6 de marcadores (el nombre y la dirección del restaurante)*/
					            	infowindow.open(gMapa, marker); /*Le pedimos que nos abra el objeto que lleva la información con 2 parámetros. El primero es el mapa donde queremos que aparezca y el segundo el marcador*/
					          	}
					        })(marker, i));

					}/*Cierre de bucle if*/
				}/*Cierre de bucle for*/
			}/*Cierre de función obtenerrestaurante*/


/*BORRAR MARCADORES*/

			function limpiar(){ /*Creamos la funcion paara que se borren los marcadores al cambiar de selección*/				
				var i;
				for (i = 0; i < vacio.length; i++) { /*Vamos a recorrer nuestro array que ya no está vacío, sino rellenado con los marcadores que se han generado*/
					vacio[i].setMap(null); /*Le decimos que todos esos marcadores les ponga el valor null, que los borre*/
				}
			}


		}/*Cierre funcion mostrar mapa*/
	}/*Cierre de funcion inicializar*/
	
	    google.maps.event.addDomListener(window, 'load', inicializar); /*Le ponemos enlazado al objeto window, y que me cargue la función inicializar*/

});/*Cierre de document.ready*/

