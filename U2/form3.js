"use strict"
{
    let formulario = document.querySelector('#idFormulario');
    const datos = new FormData(formulario);
    console.log(datos.get("nombre"));
    console.log(datos.get("edad"));
    console.log(datos.get("email"));

    formulario.addEventListener("submit", function (e) {
        // e.preventDefault(); //evta que se envíe
        let datos2 = new FormData(formulario);
        datos2.append("dni","30217294D");
        datos2.append("address","Miarrma Avenue");
        
        for (let campos of datos2.values()) {
            console.log(campos);
        }
        
        formulario.submit();
    })
}