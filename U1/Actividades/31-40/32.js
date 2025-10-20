"use strict"
{
    function count(string) {
        
        let v =/[aeiouáéíóúü]/g;
        let c =/[b-df-hj-ñp-tv-z]/g;
        
        let consonantes;
        let vocales;
        consonantes = string.match(c);
        vocales = string.match(v);
        
        if  (vocales == null && consonantes == null) {
            return "Error al introducir el string";
        }
        else {
            if (vocales == null) {
                return "Consonantes: "+consonantes.length;
            }
            else {
                if (consonantes == null) {
                    return "Vocales: "+vocales.length;
                }
                else {
                    return "Vocales: "+vocales.length+" | Consonantes: "+consonantes.length;
                }
            }
        }

    }

    console.log(count("Hola Mund123o??"));
}