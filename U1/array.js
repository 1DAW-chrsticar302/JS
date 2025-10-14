"use strict"
{
    //FORMAS DE DECLARAR UN ARRAY
    let myarray = [];
    myarray[0] = 10;
    myarray[1] = 20;
    myarray[2] = "hola";

    let myarray2 = new Array();
    myarray2[0] = 30;
    myarray2[1] = "40";

    let myarray3 = ["gamusino","up","globo"];

    //CLONADO DE ARRAY
    let myarray4 = new Array();
    myarray4 = [...myarray3,...myarray2,...myarray];

    //ARRAYS BIDIMENSIONALES
    //Forma 1:
    let myarrayBi = new Array();
    myarray4[0] = [1,2,3,4,5];
    myarray4[1] = [1,2,3,4,5];
    myarray4[2] = [1,2,3,4,5];
    myarray4[2][4] = "a";
    //Forma 2:
    
    let numFilas = 2;
    let numColumnas = 3;
    let myarrayBi2 = new Array(numFilas);

    for(let i = 0; i<numFilas; i++) {
        myarrayBi2[i] = new Array(numColumnas);
    }

    for(let i=0; i<numFilas; i++){
        for(let j=0;  j<numColumnas; j++) {
            myarrayBi2[i][j] = 0;
        }
    }

    //Forma 3:
    let myarrayBi3 = Array.from(Array(2), () => new Array(3));

    //Forma 4:
    let myarrayBi4 = new Array(5).fill().map(() => new Array(4));
    //xxxx
    //xxxx
    //xxxx
    //xxxx
    //xxxx

    //OPERACIONES CON ARRAY

    //JOIN
    console.log("join:");
    const elements = ["fire","air","water"];
    let str = elements.join(); //fire,air,water
    let str2 = elements.join("-"); //fire-air-water

    //SPLIT
    console.log("split:");
    const strNumbers = "1,2,3,4,5,6,7,8,9,10";
    const myarrayNumbers = strNumbers.split(",");

    //PUSH
    console.log("split:");
    elements.push("earth");

    //POP
    console.log("pop:");
    let myElement = elements.pop(); //saca el último valor

    //shift
    console.log("shift:");

    elements.shift(); //saca el primer elemento

    //reverse
    console.log("reverse:");
    const reversedElements = [...elements.reverse()]; //Se hace así porque se copia la referencia

    //sort
    console.log("sort:");
    let myNumbers = [100,5,15,1,99];
    myNumbers.sort(); //1,100,15,5,99   alfabeticamente
    myNumbers.sort(function (first,second){
        if(first>second) {
            return 1;
        }else {
            return -1;
        }
    });
    myNumbers.sort( (a,b)=> a>b?1:-1);
    myNumbers.sort( (a,b)=> a-b);


    //





}