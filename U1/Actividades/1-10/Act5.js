"use strict"
{
    let num1, num2, contador;

    num1 = parseInt(prompt("Dame un número"));
    num2 = parseInt(prompt("Dame otro número"));

    console.log(`Los números entre ${num1}  y ${num2} son:`)

    if (num1 > num2) {

        contador = num1 - num2;
        for (let i = 0; i <= contador; i++) {
            console.log(num2 + i);
        }

    } else {
        if (num1 == num2) {
            alert("Los numeros son iguales");
        } else {
            contador = num2 - num1;
            for (let i = 1; i < contador; i++) {
                console.log(num1 + i);
            }
        }

    }
}