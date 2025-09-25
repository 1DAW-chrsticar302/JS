"use strict"
{
    function miFuncion(num) {
        let n=num;
        for(let i = 1; i <num; i++) {
            n*=i;
        }
        return n;
    }

    let n =miFuncion(5);
    alert("El integral de tu número es " + n);
}