"use strict"
{
    /**
     * Realiza un programa que tenga 3 elementos <p> y al hacer salir el puntero del ratón
        sobre ellos desaparezcan (se oculten) y al hacer doble clic (los elimine del DOM).
        También deberá tener un botón “Reaparecer” que hará que aparezcan todos los
        elementos desaparecidos (pero no los eliminados).

        Los 3 párrafos y el botón tienen que crearse e insertarse desde el código Javascript, no desde HTML
     */

    let spawnButton = document.createElement('button');
    spawnButton.textContent = 'Mostrar elementos';


    let p1 = document.createElement('p');
    p1.textContent = 'Hola soy una frase oculta';
    p1.onmouseenter = p1.classList.add('aparecer');

    let p2 = document.createElement('p');
    p2.textContent = 'Si nos das doble click nos eliminas';

    let p3 = document.createElement('p');
    p3.textContent = 'Al darle al botón de arriba aparecemos';

    let p4 = document.createElement('p');
    p4.textContent = 'Menos los eliminados, esos se quedan en el gulag';
    

    p1.style.color = 'white';
    p1.onmouseover = function() {}



    let array = [
        p1,p2,p3,p4
    ]

    array.forEach(element => {
        document.body.insertAdjacentElement('beforeend',element);
    });

}