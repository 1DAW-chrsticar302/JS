"use strict"
{
    const r1  = /.a.o/i; //Con la i ignora las mayusculas y minusculas (i,g,m,u,y)
    const r2 = new RegExp(".a.o","i");
    const r3 = new RegExp(/.a.o/,"i");

    console.log(r1.source); //.a.o
    console.log(r1.flags); //i
    r1.flags.includes("i")?console.log("yes i"):console.log("no g");
    r1.global?console.log("yes g"):console.log("no g"); //solo para la g

    r1.flags.includes("i")?console.log("yes i"):console.log("no g");
    r1.ignoreCase?console.log("yes i"):console.log("no i"); //solo para la i

    r1.flags.includes("i")?console.log("yes i"):console.log("no g");
    r1.multiline?console.log("yes m"):console.log("no m"); //solo para la m

    r1.flags.includes("i")?console.log("yes i"):console.log("no g");
    r1.unicode?console.log("yes u"):console.log("no u"); //solo para la u

    r1.flags.includes("i")?console.log("yes i"):console.log("no g");
    r1.sticky?console.log("yes y"):console.log("no y"); //solo para la y


    /*
        boolean regExp.test (string);
        [] regExp.exec (string);
         string.match (regExp);
    */

    r4 = new RegExp(/.a.o/,"i");
    r4.test("GATO");
    r4.test("pATo");
    r4.test("Perro");

    const regEx1 = new RegExp("^football");
    const regEx2 = new RegExp("^football","m");

    console.log(regEx1.test("rugby\nfootball")); //false
    console.log(regEx2.test("rugby\nfootball")); //true

    const regExp3 = new RegExp("a","y");
    regExp3.lastIndex = 0; //default
    console.log(regExp3.test("ba"));  //false
    regExp3.lastIndex = 1;
    console.log(regExp3.test("ba")); //true

    console.log("SPECIAL CHARACTERS");

    /*
        . -> Cualquier carácter
        \ -> Escapa caracteres
        \n -> Salto de línea
        \t -> Tabulador
        \r -> Salto de carro
        \f -> Fin de formulario

        \s -> Espacio
        [] -> Cualquier carácter del interior
        | -> alternativa (o lo de la izquierda o lo de la derecha)
        [A-Z] -> Rango
    */

    let regEx7 = /^[aeiou]%/i;
    let regEx5 = /^.$/i;
    let regEx6 = /^\.&/i;
    console.log(regEx6.test("X"));
}