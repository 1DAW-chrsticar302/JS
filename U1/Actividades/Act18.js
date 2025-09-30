"use strict"
{
    function recortar(cadena,caracteres) {
        let string = new String (cadena);

        return string.substring(0,caracteres);
    }

    alert(recortar("Hola Mundo",4));
}