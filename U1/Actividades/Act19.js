"use strict"
{
    function hacerArray(cadena) {
        let string = new String (cadena);

        return string.split(" ");
    }

    console.table(hacerArray("Hola pedazo de crack"))
}