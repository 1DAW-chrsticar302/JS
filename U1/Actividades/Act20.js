"use strict"
{
    function repeatTimes(cadena,reps) {
        let string = new String (cadena);

        return string.repeat(reps);
    }

    console.log(repeatTimes("Hola Mundo ",3));
}