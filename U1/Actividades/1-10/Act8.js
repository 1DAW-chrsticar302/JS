"use strict"
{
    let num,tablaMult = [];

    num = parseInt(prompt("Dame un número:"));

    for(let i = 0; i<=10; i++) {
        tablaMult.push(i + " x " + num + " = " + i*num);
    }

    console.table(tablaMult);
}