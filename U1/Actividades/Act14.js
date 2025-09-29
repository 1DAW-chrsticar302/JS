"use strict"
{
    function miFuncion(cantidad,descuento) {
        let descontado = parseFloat(1-descuento/100);

        return  parseFloat(cantidad*descontado);
    }

    alert(miFuncion(20,20)+"€");
}