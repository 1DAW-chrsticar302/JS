"use strict"
{
    let r  = /[a-z0-9 ]+/i;
    let string = new String("Javier Ferrer");
    console.log(r.test(string));
}