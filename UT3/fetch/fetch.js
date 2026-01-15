"use strict"
{

    // const resultado = fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(response => response.json())
    // .then(datos => {
    //     console.log(datos[0].title)
    // })    

    // async function obtenerPost() {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    //     const post = await response.json()
    //     console.log(post)
    // }

    // obtenerPost()



    // const resultado = fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(response => {
    //     console.log(response.status)
    //     console.log(response.ok)
    //     if(response.ok) {
    //         return response.json()
    //     }else{
    //         ;
    //     }
    // })
    // .then(datos => {
    //     console.log(datos[0].title)
    // }) 
    // .catch(error => { console.log("Hubo un error: " + error) })


    // fetch("resources/text.txt")
    // .then(response => response.text())
    // .then(datos => console.log(datos))


    // fetch("resources/text.txt")
    // .then(function(response) {
    //     let datos = response.text()
    //     return datos
    // })
    // .then(function(texto){
    //     console.log(texto)
    //     console.log(texto.length)
    // })



    // fetch("resources/flores.jpg")
    // .then(response => response.blob())
    // .then(blob => {
    //     console.log(blob)
    //     console.log(blob.size)
    //     console.log(blob.type)


    //     let objectUrl = URL.createObjectURL(blob)
    //     localStorage.setItem('imagen',JSON.stringify(objectUrl))
    // })

    let myBtn = document.createElement('button')
    myBtn.textContent = "Mostrar imagen"
    myBtn.addEventListener('click', function() {
        let fromlocalstorage = localStorage.getItem('imagen')
        let img = document.createElement('img')
        img.setAttribute('src',JSON.parse(fromlocalstorage))
        document.body.append(img)
    })
    document.body.append(myBtn)
}
