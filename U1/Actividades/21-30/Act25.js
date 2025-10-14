"use strict"
{
    function isCapicuo (numero) {
        let str = new String(numero);
        let output = "";
        
        for (let i =  0; i<str.length; i++) {
            output += str.charAt(str.length-1 -  i);
        }

        if(str == output) {
            return true;
        }else {
            return false;
        }
    }

    if(isCapicuo(2002))  {
        alert("Es capicuo");
    }else {
        alert("No es capicuo");
    }
}