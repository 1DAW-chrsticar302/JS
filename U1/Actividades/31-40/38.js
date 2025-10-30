"use strict"
{
    let myarray = [7,5,7,8,6];

    function myFunction(array) {
        return "asc: " + array.sort((a,b) => a-b).toString() + "  desc: " + array.sort( (b,a) => a-b ).toString();
    }

    console.log(myFunction(myarray));
}