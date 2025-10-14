"use strict" 
{
    
    let num1, num2;
    num1 = prompt("Dame un número");

    while(isNaN(num1) || num1<=0) {
        alert("Tiene que ser mayor que cero y debe ser número");
        num1 = prompt("Dame un número");
    }

    num2 = prompt("Dame otro número");

    while(isNaN(num2) || num2<=0) {
        alert("Tiene que ser mayor que cero y debe ser número");
        num2 = prompt("Dame un número");
    }
    
    if(num1 == num2) {
        alert("Los numeros son iguales");
    }
    else {
        if (num1 > num2) {
            alert("El primer número es mayor");
        }
        else {
            alert("El segundo número es mayor");
        }
    }
}