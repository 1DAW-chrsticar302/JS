"use strict"
{

    let form = document.getElementById("taskForm");
    let tasksDiv = document.getElementById("tasks");
    let verBtn = document.querySelector("#ver");

    verBtn.addEventListener('click',function(){
        let div = document.getElementById('tasks')
        let localstorage = localStorage.getItem('datos')

        for(let campos of localstorage) {
            let p = document.createElement('p')
            p.textContent = campos
        }
    })
    
    let prueba = [
        {
            nombre: 'Victor',
            descripcion: 'sisisi',
            priority: 2
        },
        {
            nombre: 'Christian',
            descripcion: 'ssi',
            priority: 1
        }
    ]
    localStorage.setItem('datos', JSON.stringify(prueba))
    

    form.addEventListener('submit',function(e){
        e.preventDefault()
        
        let nombre = document.getElementById('name').value
        let descripcion = document.getElementById('description').value
        let prioridad = document.querySelector('input[name="priority"]:checked').value

        let dato = {
            name : nombre,
            description : descripcion,
            priority : prioridad
        }

        if(localStorage.getItem('datos') === null) {
            let datos = new Array()
        }else {
            let datos = JSON.parse(localStorage.getItem('datos'))
            console.log(datos)
        }

        form.reset()
    })

}