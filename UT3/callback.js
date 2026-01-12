"use strict"
{

    //EXAMPLE 1
    let mycallback = () => alert("hello world");
    setTimeout(mycallback, 2000);

    //SE CREA LA FUNCION EN LA VARIABLE Y SOLO NECESITAMOS PASAR EL NOMBRE
    //PARA EJECUTARLO


    //EXAMPLE 2
    let myArray = ["perro","gato","elefante"];
    let f = function() {
        for (let a of myArray) {
            console.log(a);
        }
        for (let i = 0; i<5000; i++) {
            console.log("-");
        }
    }

    function modificarArray (array,callback){
        array.push('Jirafa');
        callback();
        array.push("Cebra");
    }

    modificarArray(myArray, f);

}