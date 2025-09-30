"use  strict"
{

    let myString = "Hola, qué tal?";
    let myString2 =  new String ("user:password:group:home:shell");

    //Propiedades
    //.lenght (longitud de la cadena)
    console.log(myString.length);
    console.log(myString2.length);

    //toLowerCase() pasar a minúscula
    //toUpperCase() pasar a mayúsculas
    myString.toLowerCase();
    myString.toUpperCase();

    //Concatenar ambas cadenas, sin guardar el resultado
    myString.concat(myString2);

    console.log(myString.charAt(0));


    console.log(myString.indexOf("¿"));
    console.log(myString.indexOf("¿",10));
    console.log(myString.lastIndexOf("¿"));
    console.log(myString.lastIndexOf("¿",3));

    console.log(myString.replace("¿","!"));
    console.log(myString.replaceAll("¿","!"));

    let myArray = myString2.split(":");

    console.log(myString.substring(0,10)); //desde donde y cuantos caracteres

    myString3 = "Juan Pedro Bernal Márquez";
    console.log(myString3.split("")[2]);
    console.log(myString2.includes(":group:")? "SI":"No");
    console.log(myString2.repeat(3));

    let myString4 = "   ho la   ";
    console.log(myString4.trim());
}