"use strict"
{
    // const patron = /^[md].*[ao]$/i;

    // let str = "mddddddddvbbbbbola";
    // console.log(patron.test(str));

    function numbers (cadena) {
        let RegExp2 = /[0-9]*/;
        let numeros = cadena.match(/-?\d+(\.\d+)?/g);

        for (let i = 0; i<cadena.length; i++)  {
            RegExp2.lastIndex=i;
            numeros.push(RegExp2.exec(cadena));
            
        }

        return numeros;
    }
    
    console.table(numbers("123mnj5jk14"))
}