"use strict"
{

    let contenedor = document.createElement('div');
    contenedor.classList.add('container');
    document.body.append(contenedor);


    let botonCrear = document.createElement('button');
    botonCrear.textContent = 'Nuevo número';
    document.body.append(botonCrear);

    contenedor.appendChild(botonCrear);

    botonCrear.onclick = function() {
        let p = document.createElement('p');
        p.textContent = Math.floor(Math.random()*10);

        contenedor.appendChild(p);
    }
}