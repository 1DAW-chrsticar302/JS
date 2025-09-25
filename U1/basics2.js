"use strict" 
{

    let a=2;
    let b="2";

    console.log(a);
    console.log(b);

    if(a==b) {                      //Compara el dato, pero no el tipo
        console.log("son iguales")
    }

    if(a===b) {                      //Compara tanto el dato como el tipo
        console.log("son iguales")
    }



    //SWITCH
    let metodoPago = "efectivo";
    switch(metodoPago) {
        case "targeta":
            console.log("Pagaste con targeta");
            break;
        case "cheque":
            console.log("Pagaste con un cheque")
            break;
        default:
            console.log("has pagado con otra cosa o no has pagafo");
            break;
    }

    let Socio=true;

    Socio? console.log("la cuota son 10") : console.log("la cuota son 20€")

    for(let i=2; i <=30; i+=2){
        
    }
}