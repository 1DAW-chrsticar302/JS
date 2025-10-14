"use strict"
{
    let num,divisores = [];

    num = parseInt(prompt("Dame un número para saber sus divisores:"));

    for(let i=1; i<=num; i++) {
        if (num%i ==0) {
            divisores.push(i);
        }
    }

    console.table(divisores);
}
