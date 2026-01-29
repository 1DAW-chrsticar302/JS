"use strict"
{

    // let boton1 = document.createElement('input')
    // boton1.setAttribute('type', 'button')
    // boton1.setAttribute('value', 'Btn 1: Get JSON')
    // document.body.append(boton1)

    // let url = "https://jsonplaceholder.typicode.com/todos"
    // let mtRequest = new Request(url)
    // boton1.addEventListener('click', function (evento) {
    //     fetch(mtRequest)
    //         .then(function (response) {
    //             if (response.ok) {
    //                 return response.json()
    //             } else {
    //                 console.log(response.ok)
    //                 throw new Error('Error al entrar a la url')
    //             }
    //         })
    //         .then(function (datos) {
    //             datos.forEach(json => {
    //                 let p = document.createElement('p')
    //                 p.innerHTML = json.userId + " |<strong> " + json.title + '</strong> | ' + json.completed
    //                 document.body.appendChild(p)

    //             });
    //         })
    //         .catch(function (error) {
    //             console.log('Error: ' + error)
    //         })
    // })

    // document.body.appendChild(
    //     document.createElement('br')
    // )
    // document.body.appendChild(
    //     document.createElement('br')
    // )
    // document.body.appendChild(
    //     document.createElement('br')
    // )

    // let boton2 = document.createElement('input')
    // boton2.setAttribute('type', 'button')
    // boton2.setAttribute('value', 'Btn 2: Get 1 JSON')
    // document.body.append(boton2)

    // let myValue = document.createElement('input')
    // myValue.setAttribute('type', 'number')
    // document.body.appendChild(myValue)


    // boton2.onclick = function (evento) {
    //     let url2 = url + "/" + myValue.value
    //     let newRequest = new Request(url2)
    //     fetch(newRequest)
    //         .then(function (response) {
    //             if (response.ok) {
    //                 return response.json()
    //             } else {
    //                 console.log(response.ok)
    //                 throw new Error('Error al entrar a la new url')
    //             }
    //         })
    //         .then(function (json) {
    //             let p = document.createElement('p')
    //             p.innerHTML = json.userId + " |<strong> " + json.title + '</strong> | ' + json.completed
    //             document.body.appendChild(p)
    //         })
    //         .catch(function (error) {
    //             console.log('Error: ' + error)
    //         })
    // }


    let url2 = "http://localhost:3000/members"

    let boton3 = document.createElement("input");
    boton3.setAttribute("type", "button");
    boton3.setAttribute("value", "Btn3 - Get son-server");
    document.body.appendChild(boton3);

    let myValue2 = document.createElement("input");
    myValue2.setAttribute("type", "number");
    document.body.appendChild(myValue2);

    boton3.onclick = function (evento) {
        let url3 = url2 + "/" + myValue2.value;
        console.log("URL3: " + url3)
        let myRequest3 = new Request(url3)
        fetch(myRequest3)
            .then(function (response) {
                if (response.ok) {
                    return response.json()
                } else {
                    console.log(response.ok)
                    console.log(response.status)
                    throw new Error("Error en fetch")
                }
            })
            .then(function (myJson) {
                console.log(myJson)
                if (Array.isArray(myJson)) {
                    console.log('es un array')
                    myJson.forEach(element => {
                        let p = document.createElement('p')
                        p.textContent = element.id + '-' + element.userId + '-' + element.title
                        document.body.appendChild(p)
                    })
                } else {
                    let p = document.createElement('p')
                    p.textContent = myJson.id + '-' + myJson.userId + '-' + myJson.title
                    document.body.appendChild(p)
                }
            })
            .catch(function (err) {
                console.log("Error" + err)
            })
    };

    document.body.appendChild(
        document.createElement('br')
    )
    document.body.appendChild(
        document.createElement('br')
    )
    document.body.appendChild(
        document.createElement('br')
    )

    let url4 = 'http://localhost:3000/members'
    let myRequest4 = new Request(url4)

    let boton4 = document.createElement("input");
    boton4.setAttribute("type", "button");
    boton4.setAttribute("value", "POST");
    document.body.appendChild(boton4);

    boton4.addEventListener('click', function (e) {
        fetch(myRequest4, {
            method: 'POST',
            body: JSON.stringify({
                userId: 15,
                title: 'Título nuevo',
                completed: 'true',
                mensage: 'Pedro suicidate'
            })
        })
            .then(response => response.json())
            .then(console.log)
    })

    document.body.appendChild(
        document.createElement('br')
    )
    document.body.appendChild(
        document.createElement('br')
    )
    document.body.appendChild(
        document.createElement('br')
    )


    let url5 = 'http://localhost:3000/members'

    let myValue3 = document.createElement("input");
    myValue3.setAttribute("type", "number");
    document.body.appendChild(myValue3);

    let boton5 = document.createElement("input");
    boton5.setAttribute("type", "button");
    boton5.setAttribute("value", "PUT");
    document.body.appendChild(boton5);

    boton5.addEventListener('click', function (e) {
        let myRequest5 = new Request(url5 + '/' + myValue3.value)
        fetch(myRequest5, {
            method: 'PUT',
            body: JSON.stringify({
                pedro: 'matate',
                victor: "chupa"
            })
        })
            .then(response => response.json())
            .then(console.log)
    })

    document.body.appendChild(
        document.createElement('br')
    )
    document.body.appendChild(
        document.createElement('br')
    )
    document.body.appendChild(
        document.createElement('br')
    )

    let url6 = 'http://localhost:3000/members'

    let myValue6 = document.createElement("input");
    myValue6.setAttribute("type", "number");
    document.body.appendChild(myValue6);

    let boton6 = document.createElement("input");
    boton6.setAttribute("type", "button");
    boton6.setAttribute("value", "PATCH");
    document.body.appendChild(boton6);

    boton6.addEventListener('click', function (e) {
        let myRequest6 = new Request(url6 + '/' + myValue6.value)
        fetch(myRequest6, {
            method: 'PATCH',
            body: JSON.stringify({
                pedro: 'suicidate porfa'
            })
        })
            .then(response => response.json())
            .then(console.log)
    })

    document.body.appendChild(
        document.createElement('br')
    )
    document.body.appendChild(
        document.createElement('br')
    )
    document.body.appendChild(
        document.createElement('br')
    )


    let url7 = 'http://localhost:3000/members'

    let myValue7 = document.createElement("input");
    myValue7.setAttribute("type", "number");
    document.body.appendChild(myValue7);

    let boton7 = document.createElement("input");
    boton7.setAttribute("type", "button");
    boton7.setAttribute("value", "DELETE");
    document.body.appendChild(boton7);

    boton7.addEventListener('click', function (e) {
        let myRequest7 = new Request(url7 + '/' + myValue7.value)
        fetch(myRequest7, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(console.log)
    })


}