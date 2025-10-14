"use strict"
{
    function esPrimo (n) {
        for(let i = 2; i<n; i++) {
            if(n%i==0) {
                return false;
            }
        }
        return true;
    }

    if(esPrimo(prompt("Dame un numero para saber si es primo o no"))) {
        alert("Tu número es primo");
    }else{
        alert("Tu número es NO primo");
    }
}