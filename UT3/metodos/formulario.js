"use script"
{
    let url = "https://jsonplaceholder.typicode.com/todos" //Si cambias esto por el correo hace lo mismo que mandarlo pero como si fuera una API
                                                            //Para eso hay que poner ajax entre submit.io y el correo
    let mtRequest = new Request(url)

    let formulario = document.querySelector('#idForm1')
    formulario.addEventListener('submit',function (e){
        e.preventDefault()
        const datos = new FormData(formulario)
        console.log("userid: " + datos.get("userId"))
        console.log("id: " + datos.get("id"))
        console.log("title: " + datos.get("title"))

        fetch(mtRequest, {
            method:'POST',
            body: JSON.stringify({                      //Para eso aquí habría que poner datos en vez de un json
                userId:datos.get('userId'),
                title:datos.get('title'),
                completed:true
            })
        })
        .then(response => response.json())
        .then(console.log)

    })    
    
}