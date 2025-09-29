"use strict"
{
    // Función recursiva

    //caso Base

    //caso Recursivo

    function countDown1(n) {

        if(n===0) { //base case
            console.log("");
        }
        else {  //recursive case
            console.log(n);
            countDown1(n-1);
        }
    }

    let hola = (n) => {
        if(n===0) { //base case
            console.log("");
        }
        else {  //recursive case
            console.log(n);
            countDown1(n-1);
        }
    }

    hola(2);
}