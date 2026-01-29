"use strict"
{

    let boton1 = document.createElement('input')
    boton2.setAttribute('type','button')
    boton2.setAttribute('value','POST')
    document.body.append(boton1)

    let url = "https://jsonplaceholder.typicode.com/todos"
    let mtRequest = new Request(url)
    boton1.addEventListener('click',function (evento){
        fetch(mtRequest, {
            method:'POST',
            body: JSON.stringify({
                userId:2,
                title:"aliquam aut quasi",
                completed:true,
                nombre:'Pedro imbécil'
            })
        })
        .then(response => response.json())
        .then(console.log)
    })

}