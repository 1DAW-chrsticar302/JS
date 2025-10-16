"use strict"
{
    function analise(array) {
        let cadLarga;
        let contadorLarga=0;
        let cadCorta;
        let contadorCorta=0;
        let cadA;
        let contadorA;
        let numCadB = 0;
        let cadsB='';

        for(let i = 0; i<array.length; i++){
            if(array[i].length>contadorLarga) {
                cadLarga = array[i];
                contadorLarga = array[i].length;
            }
            if(contadorCorta==0 || array[i].length<contadorCorta) {
                cadCorta = array[i];
                contadorCorta = array[i].length;
            }
            if(hasB(array[i])) {
                numCadB++;
                cadsB+=array[i]+', ';
            }
        }
        let output = [
            ['La cadena más corta:',cadCorta],
            ['La cadena más larga:',cadLarga],
            ['La cadena con más a:',cadA],
            ['Las cadenas que contienen b:',cadsB],
            ['El número de ellas:',numCadB]
        ]

        return output;
    }

    function hasB(cadena) {
        let regexp = new RegExp(/b/);
        return regexp.test(cadena);
    }

    let array = new Array();
    array.push('fghrtytrygfdvb');
    array.push('dsfgrth');
    array.push('aloe');
    array.push('abcde');

    console.table(analise(array));
}