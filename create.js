"use strict"

const { cloneElement } = require("react");

{
   let comment = document.createComment("This is our comment");
   console.log(comment);
   comment.isConnected()?console.log("is connected"):console.log("is not connected");
   document.append(comment); //Insertar

   let t  = document.createTextNode("my text has been created");
   document.body.append(t);
   let myP = document.querySelector("p");
   myP.textContent = t.textContent;

  let t2 = t.cloneNode(true); // POR DEFECTO FALSE
  t2.textContent = "my text has been created";

  let newDiv = document.createElement("div") // HTMLELEMENT
  newDiv.textContent="Hola";
  let newDiv2 = newDiv;
  newDiv2.textContent = "Adios";
  console.log(newDiv);
  console.log(newDiv2);// SE PASA POR REFERENCIA (Adios)

  //POR VALOR

  newDiv2 = cloneElement(newDiv);
  console.log(newDiv2);

  let newImg = document.createElement("img");
  let newH1 = document.createElement("h1");
  let newH2 = document.createElement("h2");

  let newTextH2 = document.createTextNode("H2 text");
  newH2.append(newTextH2);
  document.body.append(newH2);
  newH2.textContent = "New H2 text";
  let br = document.createElement(br);
  newH2.append(br);
  newH2.append(document.createTextNode("General o Coronel"));
  let a = newH2.appendChild(newTextH2);

  console.log(a);

  /**
     * Node es la clase base para todos los objetos del documento, 
     * y HTMLElement hereda de Node para representar elementos HTML específicos. 
     * Esto significa que cada elemento HTML es un Node, pero no todos los Node 
     * son elementos HTML; un Node también puede ser un texto o un comentario. 
     * Esta relación permite que todos los elementos HTML hereden la funcionalidad 
     * de Node
     */

  
  

}