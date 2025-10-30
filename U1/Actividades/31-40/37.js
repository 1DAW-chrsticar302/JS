"use strict"
{
    let myarray = [1,2,3,4,5,6,7,8,9,0];

    function fix (array) {
        let pares = new Array();
        let impares = new Array();
        array.forEach(element => {
            element%2==0?pares.push(element):impares.push(element);
        });
        return "pares: "+ pares.toString() +" impares: "+impares.toString();
    }

    console.log(fix(myarray));
}

