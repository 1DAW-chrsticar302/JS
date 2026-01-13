"use strict"
{
    let enunciado = document.createElement('h1');

    let btnVer = document.createElement('button');
    btnVer.textContent = "Ver sessionStorage";

    let btnDel = document.createElement('button');
    btnDel.textContent = "Eliminar sessionStorage";

    btnVer.addEventListener('click', function () {
        console.log(sessionStorage.getItem('visitas'));
    });

    btnDel.addEventListener('click', function () {
        sessionStorage.removeItem('visitas');
        location.reload();
    });

    let visitas = sessionStorage.getItem('visitas');

    if (visitas === null) {
        visitas = 1;
    } else {
        visitas = parseInt(visitas) + 1;
    }

    sessionStorage.setItem('visitas', visitas);

    enunciado.textContent = "Número de visitas (sessionStorage): " + visitas;

    document.body.appendChild(btnVer);
    document.body.appendChild(btnDel);
    document.body.appendChild(enunciado);
}