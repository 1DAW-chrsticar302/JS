"use strict"
{
    //SET

    let mySet1 = new Set();
    mySet1.add(1);
    mySet1.add(2);
    mySet1.add(2); //Este no lo va a añadir porque ya existe

    console.log(mySet1);

    for (let elem of mySet1) {
        console.log(elem);
    }
    console.log("===========");
    mySet1.forEach(elem => console.log(elem));

    //TRANSFORMAR UN SET EN UN ARRAY

    //Crear un array desde un Set
    let myArray1 = Array.from(mySet1);
    console.log(myArray1);

    //Crear un Set desde un Array
    let myArray2 = new Array(1,2,3,4,5,6,7,7,8,8,9,9);
    let mySet2 = new Set (myArray2);
    console.log(myArray2);
    console.log(mySet2);

    console.log(mySet2.has(10)); //Devolverá false
    console.log(mySet2.has(6)); //Devolverá true
    console.log(mySet2.delete(1)); //True
    console.log(mySet2.delete(1)); //False
    mySet2.clear(); //Elimina todos los elementos


    /*
    Map: colección de datos 
    */

    let map = new Map();
    map.set("name","Luis");
    map.set("lastname","Martínez");
    map.set("age","55");
    console.log(map); //Todo el map con flechas
    console.log(map.size); //3
    console.log(map.has("email")); //False
    console.log(map.get("name")); //Luis
    map.set("name","Luis Enrique"); //Sobreescribe el valor de name
    console.log(map);

    map.set({}, 10);
    map.set(false, "muy falso");
    console.log(map);



    //Recorrer un map
    map.forEach(elem => console.log(elem));
    map.forEach((valor,clave) => {  //lo hace al revés (primero te pone la clave)
        console.log(clave + " : " + valor)
    });

    for(let [valor,clave] of map) { //Lo hace bien (primero te pone el valor)
        console.log(clave + " : " + valor)
    }

    let map2 = new Map([
        ["name","Donald"],
        ["lastname","Trump"]
        ["age","79"]
    ])
    console.log(map2);
    let map2keys = [...map2.keys]; //copia de las claves
    let map2Values = [...map2.values];
}