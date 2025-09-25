"use strict" 
{
    
    let num1, num2;
    num1 = prompt("Dame un número");
    num2 = prompt("Dame otro número");
    
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