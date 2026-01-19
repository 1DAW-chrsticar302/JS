"use strict"
{

    let btn = document.querySelector('#btn')
    const imgURL = 'https://desguacescorpas.com/wp-content/uploads/oKJFo8ipjIEA1vP6AjBJyAVBJdeWXkdkoRnb3NYeH1VGBjQGKZbDJQ.jpg'
    const corseAnywhere = 'https://cors-anywhere.herokuapp.com/'

    btn.addEventListener('click',(e) => {
        let myRequest = new Request(corseAnywhere + imgURL)
        fetch(myRequest, {
            method: "GET",
            headers: new Headers({
                "Access-control-Allow_Origin":"*",
                "Content-Type":"application/image"
            })
        })
        .then(response => {
            console.log(response.status) //Código numerico
            console.log(response.statusText) //ok / no Ok
            console.log(response.ok) //True or false
            if(response.ok) {
                return response.blob()
            }else{
                throw new Error ("Error al acceder a URL");
            }
        })
        .then(imgData => {
            console.log(imgData)
            let img = document.createElement('img')
            img.src = URL.createObjectURL(imgData)
            document.body.append(img)
        })
        .catch(err => {
            console.log("Error: " + err)
        })
    })

}