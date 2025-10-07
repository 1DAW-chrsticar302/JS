"use strict"
{
    function buscarEn(texto,cadena) {
        let palabras = texto.split(" ");
        let contador = 0;

        for(let i = 0; i<palabras.length; i++){
            if (palabras[i] == cadena) {
                contador+=1;
            }
        }
        console.log(contador);
        console.table(palabras);

        return contador;
    }

    alert(buscarEn("hola mundo como estamos en el mundo de hoy mundo","mundo"));
}