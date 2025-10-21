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


    //SLICE
    let nombres = ["Manuel", "Chris", "jose", "Victor", "Angel"];

    let nombresSubArray = nombres.slice(1,3); // del primero al tercero
    let nombresInv = nombres.slice(-2); //los dos últimos

    //filter
    let users = [
        {name: "John", age: 20},
        {name: "Amy", age: 30},
        {name: "Thomas", age: 10}
    ];

    let filterUsers = users.filter(function (user) {
        return user.age > 15;
    })

    //find: pirmer eleento que encuentra

    users.find(function (user){
        return user.name.match(/A[a-z][a-z]/);
    })


    //some: comprueba si al menos un elemento cumple la condición

    //findIndex = devueve el indice del primer elemento que cumpla la condición

    //concat = concatena arrays

    //reduce (acumulador, valorActual)
    let numbers = [1,2,3,4,5];
    let sumaTotal = numbers.reduce(function (acumulador, valorActual) {
        acumulador +=valorActual;
        return acumulador;
    },0);

    let sumaTotal2 = numbers.reduce((acumulador, valorActual) => {
        acumulador +=valorActual;
        return acumulador;
    },0);

    const miArrayNumeros = [[0,1],[2,3],[4,5]];
    let ArrayCompleto = miArrayNumeros.reduce((acc,valorA) => {acc.concat(valorA);},[]); //[1,2,3,4,5]
    


    //includes ()
    let motos = ["yamaha","ducati", "kawasaki"];
    console.log(motos.includes("vespa")); //Al ser falso, no dice nada
    console.log(motos.includes("ducati")); //Aquí si


    // ITERAR SOBRE UN ARRAY
    // for, foreach, map, for of

    //for
    let vector = [1,2,"A","F",-1,2.4];

    for (let i=0; i<vector.length; i++) {
        console.log(vector[i]);
    }


    //foreach -- no devuelve nada
    vector.forEach(function(elem){
        console.log(elem);
    });

    vector.forEach( function(elem, index) {
        console.log("En  la posición "+index+" Nos encontramos el elemento: "+elem);
    });

    vector.forEach( (elem, index) => {
        console.log("En  la posición "+index+" Nos encontramos el elemento: "+elem);
    });


    //Map -- Devuelve cada elemento
    let vector2 = vector.map( function(elem) {
        console.log(elem);
        return elem;
    }); //

    let vectorX2 = vector.map( x => x*2);

    // let users2 = [
    //     { name: "John", age: 34},
    //     { name: "John", age: 34},
    //     { name: "John", age: 34},
    //     { name: "John", age: 34}
    // ]

    let arrayAges = users.map(user => user.age);
    let sumaEdades = arrayAges.reduce( (acumulador, valorActual) =>  acumulador+=valorActual);
    console.log(arrayAges);
    console.log(sumaEdades);


    let fullUsers = users.map(user => {
        return {
            ...user,
            city: "Guadalajara"
        };
    });

    let fullUsers2 = users.map(user => {
        return {
            ...user,
            age: user.age*2
        };
    });


    //for of
    for(let user of users) {
        console.log(user);
    }



}
