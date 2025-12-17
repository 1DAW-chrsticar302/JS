"use strict"
{

let formulario = document.querySelector('#formulario');
// let nombre = document.getElementById('nombreInput');
// let color = document.getElementById('colorInput');
// let numero = document.getElementById('numeroInput');
// let submitBtn = document.getElementById('submit');

formulario.addEventListener('submit',function(event){
    event.preventDefault();
    let datos = new FormData(formulario);

    for(let campos of datos.values()) {
        console.log(campos);
        console.log('=========');
    }
    formulario.submit();
});


}