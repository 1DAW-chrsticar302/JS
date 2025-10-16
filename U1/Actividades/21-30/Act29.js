"use strict"
{
    function changeType(number,type) {
        let transformed;
        if (type == 2) {
            
            transformed  = parseInt(number,2);
            return transformed;

        }else {
            if(type == 10) {

                let acumulador = ''
        
                while (number >= 1) {
                    acumulador = number%2 + acumulador;
                    number/=2;
                }
                return acumulador;

            }else {
                return "Tipo introducido incorrecto"
            }
        }
    }

    console.log(changeType(4,10));
}