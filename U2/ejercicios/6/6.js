"use strict"
{
    let btnComenzar = document.createElement('button');
    btnComenzar.textContent = 'Comenzar Saludos';
    document.body.append(btnComenzar);
    let btnParar = document.createElement('button');
    btnParar.textContent = 'Terminar Saludos';
    document.body.append(btnParar);

    btnParar.disabled = true;

    let intervalId = null;
    btnComenzar.addEventListener('click', function() {
        intervalId = setInterval(function() {
            alert('Hola');
        }, 5000);
        
        btnComenzar.disabled = true;
        btnParar.disabled = false;
    });
    btnParar.addEventListener('click', function() {
        clearInterval(intervalId);
        intervalId = null;
        
        btnComenzar.disabled = false;
        btnParar.disabled = true;
    })
}