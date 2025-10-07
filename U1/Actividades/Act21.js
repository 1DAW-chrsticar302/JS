"use strict"
{
    function invertir (cadena) {
        let invertido = new String(cadena);
        let  output = "";
        
        for (let i =  0; i<invertido.length; i++) {
            output += invertido.charAt(invertido.length-1 -  i);
        }

        return output;
    }

    alert(invertir("hola"));
}