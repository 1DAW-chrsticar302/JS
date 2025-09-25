"use strict"
{
    let num1,num2,operador;

    num1 = parseInt(prompt("Dame un número:"));
    operador = prompt("dame un operador:  suma(+), resta(-), producto(*) o division(/)")
    num2 = parseInt(prompt("Dame un número:"));

    switch(operador) {
        case "+":
            alert("La solución es: " + parseInt(num1+num2));
            break;
        case "-":
            alert("La solución es: " + parseInt(num1-num2));
            break;
        case "*":
            alert("La solución es: " + parseInt(num1*num2));
            break;
        case "/":
            alert("La solución es: " + parseFloat(num1/num2));
            break;
        default:
            alert("Debes darme un operador para hacer la operación");
            break;
    }
}