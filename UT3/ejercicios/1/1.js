"use strict"
{

    let enunciado = document.createElement('h1');
    let botonClear
    
    let visitas = document.cookie;

    if(visitas === "") {
        visitas = 1;
    }else {
        visitas = parseInt(visitas) + 1;
    }

    enunciado.textContent = "Número de visitas: " + visitas;
    document.body.append(enunciado);
    document.cookie = visitas;

}