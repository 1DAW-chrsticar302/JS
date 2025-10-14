"use strict"
{
    let suma=0,producto=1,media,contador=0,n;

    n = parseInt(prompt("Dame un número"));

    while(n>=0 && !isNaN(n)) {
        suma+=n;
        producto*=n;
        contador++;
        n = parseInt(prompt("Dame otro número"))
    }
    media = parseFloat(suma/contador);

    alert(`Suma:  ${suma} |Producto: ${producto} | Media: ${media}`)
}