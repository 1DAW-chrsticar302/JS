"use strict"
{
    let myarray = ["x",10,"x",2,"10",10,true,true];

    function myFunction(array) {
        let set = new Set(array);

        return set;
    }

    console.log(myFunction(myarray));
}