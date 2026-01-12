"use strict"
{
    //SESSIONSTORAGE1
/**
     * 2 objetos: 
     *  - 1) localStorage: la información se mantiene hasta que la elimine
     *  - 2) sessionStorage: se pierde cuando se cierra ventana del navegador
     * 4 métodos:
     *  - 1) sessionStorage.setItem ("variable", "valor")
     *  - 2) sessionStorage.getItem ("variable")
     *  - 3) sessionStorage.removeItem("variable")
     *  - 4) sessionStorage.clear() : borra todas las localStorage
     
        
    */
    
    
      // EJEMPLO 1:
    sessionStorage.setItem("nombre", "Jacinta");
    console.log(sessionStorage.getItem("nombre"));

    sessionStorage.setItem("nombre", "Felipe"); //  se perde el valor anterior.
    console.log(sessionStorage.getItem("nombre"));

    // EJEMPLO 2:
    sessionStorage.setItem("apellidos", "de Borbón");
    console.log(sessionStorage.getItem("apellidos"));

    // EJEMPLO 3:
    sessionStorage.removeItem("apellidos");
    //sessionStorage.clear(); //  se borran todos los sessionStorage
    
    /**
    ** Usando la tecnología de localStorage, almacena en una variable llamada username el nombre del usuario y, al cargar la página, verificar:
     * - si la variable no existe:
     *    - Indicarle al usuario que no está identificado.
     *    - Mostrarle un prompt para que introduzca su nombre de usuario.
     *    - Controlar si deja el prompt en blanco y hace click en cancelar.
     *    - guardar el valor de la variable username.
     * - si la variable ya existe:
     *    - Saludar al usuario escribiendo: ¡Bienvenido de nuevo, username!
     * Añadir en la parte superior un botón para eliminar la variable username del localStorage
     * 
     * NOTA: excepto el prompt para pedirle los datos al usuario, todo debe escribirse en el DOM
     *  usando los elementos HTML que creas necesarios en Javascript
     * NOTA2: probar el funcionamiento recargando la página tras haber introducido un username y tras borrarlo tanto con el botón como desde el navegador.
     *
    */

    // ESTOY HACIENDO PRIMERO LO QUE HAY QUE MONTAR PARA HACER EL EJERCICIO, Y DESPUÉS HARÉ EL EJERCICIO PERSÉ.
    function processName () {

    }

    function getCookie(cookieName) {

        let cookies = document.cookie.split(';');

        for (let c of cookies) {
            
            console.log(c);
        }
    }

    document.cookie = "Ricardo" + "=" + "hola" + ";" + "expires=Thu, 18 Dec 2026 12:00:00 UTC" + ";path=/";
    document.cookie = "Aurelio" + "=" + "adios" + ";" + "expires=Thu, 18 Dec 2026 12:00:00 UTC" + ";path=/";
    getCookie("Ricardo");
}