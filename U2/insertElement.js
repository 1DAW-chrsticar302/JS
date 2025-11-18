"use strict"
{
    /**
     * PROPIEDADES PARA REEMPLAZAR O CREAR TEXTOS O ELEMENTOS PEQUEÑOS
     * textContent --> texto sin formato
     * innerHTML --> texto con formato
     * outerHTML --> texto con formato + etiqueta HTML
     * 
     */
    
    let myDiv1 = document.getElementById("idDiv1");
    console.log(myDiv1);
    //CONCATENAR TEXTO + agregarle ESTILO
    myDiv1.style.setProperty("background-color", "red")
    myDiv1.textContent = "Contenido del DIV sin formato";
    myDiv1.textContent +=" Hola caracola";

    let myDiv2 = document.getElementsByClassName("cDiv2");
     // RESULTADO ARRAY DE myDiv2
    console.log(myDiv2);

    // QUERY SELECTOR USAR PARA PILLARLO BIEN 

    myDiv2.textContent = "Hola a todas y a todos";
    // VAMOS A ESCRIBIR CON FORMATO
    myDiv2.innerHTML = "Hola a <strong>TODA</strong> y a todos";
    myDiv2.innerHTML += " , buenas <i>tardes</i>";

    console.log(myDiv2.outerHTML);

    /**
     * append  --> añadir hijo (Node o String) + no te devuelve nada
     * appendChild --> añadir hijo (Node) +  te devuelve el nodo insertado
     */

    const img = document.createElement("img");
    img.src = "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg";
    img.style.setProperty("width", "40px");
    img.alt ="logo JS";
    document.body.appendChild(img);

    const myDiv3 = document.createElement("div"); // Me invento miDiv3 para luego colocar miDiv4 alrededor de miDiv3 (más abajo)
    myDiv3.textContent = "Esto es mi Div3 insertado con javascript";
    myDiv3.setAttribute("id", "idDiv3");
    console.log(myDiv3);

    document.body.append(myDiv3);

    

    /**
     * <!--beforebegin-->
     * 
     * <p1>
     * 
     *  <!--afterbegin-->
     *  texto
     *  <!--beforeend-->
     * 
     * </p1>
     * 
     * <p2></p2>
     * 
     */

    const myDiv4 = document.createElement("div");
    myDiv4.setAttribute("id","idDiv4");
    myDiv4.textContent = "Contenido de Div4";

    //Distints formas de cambiar un style
    myDiv3.setAttribute("style","background-color: orange");
    myDiv3.style.setProperty("background-color","orange");
    myDiv3.style.backgroundColor = "orange";

    // myDiv3.insertAdjacentElement("afterbegin", myDiv4);
    // myDiv3.insertAdjacentElement("beforeend", myDiv4);
    // myDiv3.insertAdjacentElement("afterend", myDiv4);
    // myDiv3.appendChild(myDiv4);

    myDiv3.insertAdjacentHTML("afterbegin","<h1>HOLA</h1>");
    myDiv3.insertAdjacentText("beforeend","HOLA");

    //EXERCISE 1: Using prompt, ask a number N to an user and create in
    // DOM N paragraphs with a random number between 0 and 10 each one.

    // let n = parseInt(prompt("Dime un numero:"));
    
    // for(let i = 0; i < n; i++) {
    //     let h2 = document.createElement("h2");
    //     let random = Math.floor(Math.random()*11);

    //     h2.innerHTML = "<p><b><i>Christian Carrasco Abal "+ random +"</i></b></p>"

    //     document.body.append(h2);
    // }

    //EXERCISE 2: Using prompt, ask a number N to an user and create in DOM N H2 elements writing 
    // inside a paragraph your name in bold and italic + a random number between 0 and 10.

    // let n = parseInt(prompt("Dime un numero:"));
    
    // for(let i = 0; i < n; i++) {
    //     let h2 = document.createElement("h2");
    //     let random = Math.floor(Math.random()*11);

    //     h2.innerHTML = "<p><b><i>Christian Carrasco Abal "+ random +"</i></b></p>"

    //     document.body.append(h2);
    // }

    // EXERCISE 3: Using prompt, ask a number N to an user and create in DOM an 
    // unordered list with N random numbers between 1 and 15 for each element in bold.
    let n = parseInt(prompt("Enter a number:"));
    let ul = document.createElement("ul");

    for (let i = 0; i < n; i++) {
        let randomNum = Math.floor(Math.random() * 15)+1;
        let li = document.createElement("li");

        let b = document.createElement("b");
        b.textContent = randomNum;

        li.appendChild(b);
        ul.appendChild(li);
    }

    document.body.append(ul);

}