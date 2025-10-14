"use strict"
{
    function comprobarNif(nif) {
        let myString = new String (nif);
    
        if(myString.length === 9 && isNaN(myString.charAt(myString.length-1))) {
            alert("NIF válido");
        }
        else {
            alert("NIF no válido");
        }
    }

    comprobarNif("30217294D");
}