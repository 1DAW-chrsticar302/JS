"use strict"
{
    const divButtons = document.querySelector("#idButtons");
    const divContent = document.querySelector("#idContent");

    let btnTask1 = document.createElement("input");
    btnTask1.setAttribute("type", "button");
    btnTask1.setAttribute("value", "LOAD IMAGES");
    btnTask1.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask1);

    let btnTask2 = document.createElement("input");
    btnTask2.setAttribute("type", "button");
    btnTask2.setAttribute("value", "ADD USER");
    btnTask2.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask2);

    // let value2 = document.createElement('input')
    // value2.setAttribute('type','number')
    // value2.setAttribute('value',0)
    // value2.setAttribute('id','value2')
    // divButtons.appendChild(value2)

    let btnTask3 = document.createElement("input");
    btnTask3.setAttribute("type", "button");
    btnTask3.setAttribute("value", "MODIFY IMAGES");
    btnTask3.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask3);

    let btnTask4 = document.createElement("input");
    btnTask4.setAttribute("type", "button");
    btnTask4.setAttribute("value", "MODIFY NAME");
    btnTask4.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask4);

    let btnTask5 = document.createElement("input");
    btnTask5.setAttribute("type", "button");
    btnTask5.setAttribute("value", "DELETE PROFE");
    btnTask5.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask5);

    let btnTask6 = document.createElement("input");
    btnTask6.setAttribute("type", "button");
    btnTask6.setAttribute("value", "DELETE HERO");
    btnTask6.setAttribute("class", "btn btn-info m-2");
    divButtons.appendChild(btnTask6);

    let btnClean = document.createElement("input");
    btnClean.setAttribute("type", "button");
    btnClean.setAttribute("value", "Clean DOM");
    btnClean.setAttribute("class", "btn btn-danger m-2");
    divButtons.appendChild(btnClean);

    btnClean.onclick = function (e) {
        cleanScreen();
    };

    let myRequest = new Request("http://127.0.0.1:3000/usuarios");
    let myRequest2 = new Request("http://localhost:3000/heroes")

    btnTask1.addEventListener("click", function (event) {
        fetch(myRequest)
        .then(function(response) {
            if(response.ok){
                return response.json()
            }else{
                console.log(response.status)
                console.log(response.ok)
            }
        })
        .then(function(json) {
            json.forEach(element => {
                let p = document.createElement("p");
                let img = document.createElement('img')
                img.setAttribute('style','width:20%;')
                img.setAttribute('src',element.foto)
                p.appendChild(img)
                divContent.appendChild(p);
            });
        })
    });

    btnTask2.addEventListener("click", function (event) {
        fetch(myRequest,{
            method:'POST',
            body:JSON.stringify({
                usuario:'Christian',
                email:'ccaraba2502@g.educaand.es',
                foto:'https://pbs.twimg.com/media/Fo43Hu9aUAAbruN.jpg'
            })
        })
        .then(response => response.json())
        .then(console.log)
    });


    btnTask3.addEventListener("click", function (e) {
        
        fetch(myRequest.url+'/1')
        .then(response => response.json())
        .then(function(json){
            fetch(myRequest) 
        })

    })


    function cleanScreen() {
        while (divContent.firstChild) {
            divContent.removeChild(divContent.firstChild);
        }
    }

    
    btnTask4.addEventListener("click", function (e) {
        let p = document.createElement("p");
        p.textContent = "Not implemented yet";
        p.style.setProperty("color", "red");
        divContent.appendChild(p);
    })

    btnTask5.addEventListener("click", function (event) {
        let p = document.createElement("p");
        p.textContent = "Not implemented yet";
        p.style.setProperty("color", "red");
        divContent.appendChild(p);

    });



    btnTask6.addEventListener("click", function (event) {
        let p = document.createElement("p");
        p.textContent = "Not implemented yet";
        p.style.setProperty("color", "red");
        divContent.appendChild(p);

    });


}