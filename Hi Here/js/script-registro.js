/*----------FUNCIÓN DE REGISTRO----------*/

    var storage = localStorage; /*Declaramos la variable de localstorage para guardar las cookies en el navegador*/
    
    function guardar(){ 
        var clave = document.getElementById('correo').value; /*Cogemos el valor con la id correo del archivo de registro.html*/
        var valor = document.getElementById('contrasena').value; /*Cogemos el valor con la id contrasena del archivo de login.html*/
        
        storage.setItem(clave, valor); /*El método setItem de storage dice que esta clave y este valor los almacenará en el navegador*/
        
        limpiar(); /*Inicializamos la función limpiar descrita abajo*/
        window.open("login.html"); /*Le decimos que nos abra la ventana de login*/

    }

    function limpiar() { /*Esta función nos va a refrescar los valores de correo y contraseña*/
        document.getElementById('correo').value = '';
        document.getElementById('contrasena').value = '';
        
    }