"use strict"
{
    let a = document.getElementsByTagName("a");
    console.log(a);
    for (let elem of a) {
        console.log(elem);
        console.log(elem.href);
        console.log(elem.textContent);
    }

    let listaUs = document.getElementsByClassName("cListaVehiculos");
    console.log(listaUs);
    
    listaUs  = document.getElementsByName("nLista"); //NodeList
    listaUs.forEach(element => {
        console.log(element);
        console.log(element.getAttribute("name"));
        console.log(element.textContent);
    });

    let ul = document.getElementById("idAviones");
    console.log(ul);

    let myCar = document.querySelector("#idCoches"); //para id
    console.log(myCar);

    let mycharacters = document.querySelector(".cListaPersonajes"); //para clases
    console.log(mycharacters);

    let myP = document.querySelector("p"); //Solo sirve para el primero que se encuentra
    console.log(myP);


    let listaP = document.querySelectorAll("p"); //Node list
    listaP.forEach(p=> {
        console.log(p);
        console.log(p.textContent);
    });

    let listaUls = document.querySelectorAll("ul");
    console.log(listaUls);
    console.log(listaUls[0]);

    listaUls = document.querySelectorAll('[name="nLista"]'); //para name

    
}