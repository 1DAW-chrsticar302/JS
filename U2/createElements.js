"use strict"
{

    let c = document.createComment("This is a comment");
    c.isConnected()?console.log("Is connected"):console.log("Is not connected");

    document.body.append(c);  //para insertar un elemento

    let t = document.createTextNode("text has been created");
    t.isConnected()?console.log(""):console.log("");
    document.body.append(t);


    let myP = document.querySelector("p");
    myP.textContent = t.textContent;

    let t2 = t.cloneNode();
    t2.textContent = "my text 2 has been created";
    document.body.append(br);
    document.body.append(t2);

}