"use strict"
{
    let buttonShow = document.createElement('button');
    buttonShow.textContent = 'Mostrar elementos';
    document.body.append(buttonShow);

    let buttonAll = document.createElement('button');
    buttonAll.textContent = 'Marcar todos';
    document.body.append(buttonAll);

    let buttonNone = document.createElement('button');
    buttonNone.textContent = 'Desmarcar todos';
    document.body.append(buttonNone);

    let buttonReset = document.createElement('button');
    buttonReset.textContent = 'Resetear';
    document.body.append(buttonReset);

    buttonShow.onclick = function () {
        let container = document.querySelector('.content');
        if(container){
            document.body.removeChild(container);
        }else{
            let contenedor = document.createElement('div');
            contenedor.classList.add('content');

            for(let i=0; i<100; i++){
                let div = document.createElement('div');

                let label = document.createElement('label');
                label.textContent = i;
                let checkbox = document.createElement('input');
                checkbox.setAttribute('type','checkbox');
                checkbox.setAttribute('value',Math.floor(Math.random() * 101) + 100);

                checkbox.onchange = function () {
                    if(!checkbox.checked) {
                        console.log('Checkbox' + checkbox.getAttribute('value') + ' no marcado');
                    }else{
                        console.log('Checkbox' + checkbox.getAttribute('value') + ' marcado');
                    }
                }

                div.appendChild(label);
                div.appendChild(checkbox);

                contenedor.appendChild(div);
            }
            document.body.insertAdjacentElement("beforeend",contenedor);
        }
    }

    buttonAll.onclick = function () {
        let array = document.querySelectorAll('input');
        array.forEach(element => {
            if(element.getAttribute('value')%2 == 0 && !element.classList.contains('grande')) {
                element.classList.add('grande');
            }
            element.checked = true;
            console.log('Checkbox' + element.getAttribute('value') + ' marcado');
        });
    }

    buttonNone.onclick = function () {
        let array = document.querySelectorAll('input');
        array.forEach(element => {
            element.checked = false;
            console.log('Checkbox' + element.getAttribute('value') + ' no marcado');
        });
    }

    buttonReset.onclick = function () {
        let array = document.querySelectorAll('.grande');
        array.forEach(element => {
            element.classList.remove('grande');
        });
    }
}