"use strict"

{

    let parrafadaHistorica = document.createElement('h1');
    parrafadaHistorica.textContent = "Tabla de 10x10 con numeros en él";
    document.body.append(parrafadaHistorica);

    let botonReset = document.createElement('button');
    botonReset.textContent = 'Resetear tabla'

    let botonShow = document.createElement('button');
    botonShow.textContent = "Mostrar tabla";
    document.body.append(botonShow);

    let botonPrimos = document.createElement('button');
    botonPrimos.textContent = "Ver primos";
    document.body.append(botonPrimos);


    botonShow.onclick = function() {
        let confirmacion = document.querySelector('.tabla');
        let confirmacion2 = document.querySelector('.tabla2');
        if (confirmacion || confirmacion2) {

        }else{
            let tabla = document.createElement('table');
            tabla.classList.add('tabla');

            let  contador = 1;
            for(let i = 0; i<100; i++) {
                let numero = document.createElement('div');
                if(esPrimo(contador)) {
                    numero.classList.add('selected');
                }else{
                    numero.classList.add('notSelected');
                }
                numero.textContent = contador;
                tabla.appendChild(numero);
                contador ++;
        }

        document.body.append(tabla);
        }
    };

    function esPrimo(num) {
        for(let i=2; i<num; i++) {
            if (num%i==0){
                return false;
            }
        }
        return true;
    }

    botonPrimos.onclick = function() {
        let tabla = document.querySelector('.tabla').classList;
        tabla.remove('tabla');
        tabla.add('tabla2');
    }

}