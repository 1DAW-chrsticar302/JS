"use strict"
{

    let url = "https://jsonplaceholder.typicode.com/todos/10"
    let myRequest = new Request(url)

    fetch(myRequest, {
        method:'DELETE',
    })
    .then(response => response.json())
    .then(console.log)

    let url2 = "https://jsonplaceholder.typicode.com/todos/11"
    let myRequest2 = new Request(url)

    fetch(myRequest2, {
        method:'PATCH',
        body:{
            title: "Nuevo titulo"
        }
    })
    .then(response => response.json())
    .then(console.log)


}