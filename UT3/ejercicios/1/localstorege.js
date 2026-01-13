"use strict"
{
    let enunciado = document.createElement('h1');

    let btnVer = document.createElement('button');
    btnVer.textContent = "Ver LocalStorage";

    let btnDel = document.createElement('button');
    btnDel.textContent = "Eliminar LocalStorage";

    btnVer.addEventListener('click', function () {
        console.log(localStorage.getItem('visitas'));
    });

    btnDel.addEventListener('click', function () {
        localStorage.removeItem('visitas');
        location.reload();
    });

    let visitas = localStorage.getItem('visitas');

    if (visitas === null) {
        visitas = 1;
    } else {
        visitas = parseInt(visitas) + 1;
    }

    localStorage.setItem('visitas', visitas);

    enunciado.textContent = "Número de visitas (LocalStorage): " + visitas;

    document.body.appendChild(btnVer);
    document.body.appendChild(btnDel);
    document.body.appendChild(enunciado);
}

