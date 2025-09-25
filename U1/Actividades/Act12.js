"use strict"
{
    function  miFuncion(num,type) {
        if(type === "C") {
            return (parseInt(num+32) + "ºF");
        }else{
            return (parseInt(num-32) + "ºc");
        }
    }

    alert("Hace " + miFuncion(20,"C") + " fuera");
}