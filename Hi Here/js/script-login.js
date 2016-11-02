/*----------FUNCIÓN DE LOGIN----------*/

    var storage = localStorage; /*Declaramos la variable de localstorage para guardar las cookies en el navegador*/

    function entrar(){ 
        var clave = document.getElementById('correo').value; /*Cogemos el valor con la id correo del archivo de login.html*/
        var valor = document.getElementById('contrasena').value; /*Cogemos el valor con la id contrasena del archivo de login.html*/

        if(localStorage.getItem(clave) == valor) { /*Utilizamos un bucle if else. Utilizamos el método getItem para obtener estos valores del localstorage del navegador. Si lo escrito en el formulario coincide con la clave y el valor del localstorage saltará el if con lo siguiente:*/
            window.open("index.html"); /*Le decimos que nos abra la ventana de index*/
        } else { /*Si no saltará una ventana de alerta con el mensaje*/
            alert("Si aún no estás registrado, por favor hazlo ahora.");  
        }
    }