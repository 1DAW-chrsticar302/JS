"use strict"
{
    let myBtn5 = document.querySelector("#idBoton6");
    let myP1 = document.querySelector("#idP1");
    let myP2 = document.querySelector("#idP2");
    myBtn5.addEventListener("click", function(evento){
        console.log(evento);
    })

    myBtn5.addEventListener("click", (evento) => {
        console.log(evento.button); //  0: left button
        console.log(evento.x + " - " + evento.y); // Coordenadas respecto al limite de la pantalla superior izquierda
        console.log(evento.clientX + " - " + evento.clientY);
        console.log(evento.offsetX + " - " + evento.offsetY);
    
    })

    
    myBtn5.addEventListener("mousemove", (evento) => {
        console.log(evento.button); //  0: left button
        console.log(evento.x + " - " + evento.y); // Coordenadas respecto al limite de la pantalla superior izquierda
        console.log(evento.clientX + " - " + evento.clientY);
        console.log(evento.offsetX + " - " + evento.offsetY);
        myP1.textContent = "X= " + evento.x + " ; " + "Y= " + evento.y;
        myP1.textContent = "X= " + evento.offsetx + " ; " + "Y= " + evento.offsety;
    });

    /**
     * MAS INFO EN:
     * https://devdocs.io/dom/mouseevent
     * 
     */

    document.addEventListener("mousemove", function (evento){
        myP2.innerHTML = "X= " + evento.x + " ; " + "Y= " + evento.y;
        myP2.innerHTML = "<br> X= " + evento.screenX + " ; " + "Y= " + evento.screenY;
        
    });
    function showMessage (evento){
        console.log("The event type is " + evento.type);
        if (evento.type=="keyup"){
            console.log("Key Code: "  + evento.code);
            console.log("Tecla pulsada: " + evento.key);
        }else if(evento.type == "click"){
            console.log(evento.detail);
            console.log("Estaba pulsada la tecla CTRL?" + evento.ctrlKey);
            console.log("Estaba pulsada la tecla ALT?" + evento.altKey);
            console.log("Estaba pulsada la tecla SHIFT " + evento.shiftKey);
            console.log(evento.target);
            console.log(evento.target.id);
            console.log(evento.target.textContent);
            
        } else if (evento.type == "dblclick"){
            console.log("Doble click");
        }else if (evento.type == "contextmenu"){
            console.log("Menu contextual");
            evento.preventDefault();

        }

    }
    myBtn5.addEventListener("keyup", showMessage);
    myBtn5.addEventListener("click", showMessage);
    myBtn5.addEventListener("dblclick", showMessage);
    myBtn5.addEventListener("contextmenu", showMessage);

    // CREACIÓN DEL BOTÓN 6
    let myBtn6 = document.createElement("button");
    myBtn6.textContent = "Greet 6";
    document.body.appendChild(myBtn6);
    
    // objeto this
    
    // myBtn6.addEventListener("dblclick", (evento) => {
    //     console.clear();
    //     // this.textContent = "Button 6"; => solo lo cambia si no es función flecha, es decir con function (evento){this.textContent="Boton 6"};
    //     evento.target.textContent = "Hola 6";
    // });

    myBtn6.addEventListener("dblclick", function (evento) {
        console.clear();
        this.textContent = "Button 6";
        evento.target.setAttribute("id", "idBtn6");
        console.log(this);
    });

    /**
    * elemento.addEventListener ("eventoQueCapturo", function(), {capture: true, once: true, passive: true})
    */

    let myBtn7 = document.createElement("button");
    myBtn7.textContent = "Greet 7";
    document.body.appendChild(myBtn7);
    myBtn7.addEventListener("click", function (evento){
        alert("Click en btn7");
    }, {once: true});

    // SOLO SE EJECUTA UNA VEZ POR EL ONCE: TRUE

     let myBtn8 = document.createElement("button");
    myBtn8.textContent = "Greet 8";
    document.body.appendChild(myBtn8);
    myBtn8.addEventListener("click", function (evento){
        alert("Click 1");
    }, {once: true});
    myBtn8.addEventListener("click", function (evento){
        alert("Click 2");
    }, {once: true});
    myBtn8.addEventListener("click", function (evento){
        alert("Click 3 pero será la primera");
    }, {capture: true});

    function f (evento) {
        evento.preventDefault();
        console.log("scroll");

    }
    window.addEventListener("scroll", f, {passive: true});

    //PASSIVE TRUE ANULA A preventDefault

    
}