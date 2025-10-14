"use strict"
{
    function miFuncion(caracter,base)  {
        let output="";
        
        while (base!=0) {
            for(let i=0; i < base; i++) {
                output+=caracter;
            }
            output+="\n"
            base--;
        }

        return output;
    }

    console.log(miFuncion("A",5));
}