"use strict"
{

    /**
     * remove()
     * removeChild(nodoHijo)
     * replaceChild(nodoNuevo,nodoAntiguo)
     */

    let myDiv = document.querySelector("#idDiv2");
    console.log(myDiv);

    console.log(myDiv.isConnected);
    myDiv.remove();
    console.log(myDiv.isConnected);

    myDiv.removeChild(); //Devuelve el nodo que ha quitado

    myDiv.replaceChild(p1,p2)

}