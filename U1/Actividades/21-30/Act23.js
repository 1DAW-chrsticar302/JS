"use strict"
{
    function isPalindromo(cadena) {
        let invertido = new String(cadena);
        let  output = "";
        
        for (let i =  0; i<invertido.length; i++) {
            output += invertido.charAt(invertido.length-1 -  i);
        }

        if(output == cadena) {
            return true;
        }else{
            return false;
        }
    }

    if(isPalindromo("ojo")) {
        alert("Es palindromo");
    }else{
        alert("No es palindromo");
    }
}