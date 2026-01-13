"use strict"
{
    function setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
         let name = cname + "=";
         let ca = document.cookie.split(';');
         for(let i = 0; i < ca.length; i++) {
         let c = ca[i];
         while (c.charAt(0) == ' ') {
         c = c.substring(1);
         }
         if (c.indexOf(name) == 0) {
         return c.substring(name.length, c.length);
         }
         }
         return "";
    }

    function deleteCookie(cname) {
        document.cookie = cname+'=; expires=Thu, 01 Jan 1970 00:00:01GMT;path=/';
    }


    let enunciado = document.createElement('h1');
    let btnVer = document.createElement('button');
    btnVer.textContent = "Ver Cookie"
    
    let btnDel = document.createElement('button');
    btnDel.textContent = "Eliminar Cookie"

    btnVer.addEventListener('click',function() {
        console.log(getCookie('visitas'));
    });

    btnDel.addEventListener('click',function() {
        deleteCookie('visitas')
        location.reload()
    });

    let visitas = getCookie('visitas');

    if (visitas === "") {
        visitas = 1;
    } else {
        visitas = parseInt(visitas) + 1;
    }

    setCookie('visitas', visitas, 7);

    enunciado.textContent = "Número de visitas(Cookies): " + visitas;
    document.body.appendChild(btnVer)
    document.body.appendChild(btnDel)
    document.body.appendChild(enunciado);

}