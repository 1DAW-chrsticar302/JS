"use strict"
{

    let persona = {
        nombre: "Pepe",
        edad: 30,
        ciudad:  "Sevilla"
    };

    console.log(persona);

    let personaCompleta = {
        nombre: "Hugo",
        dni: "30217294D",
        edad: 19,
        ciudad: "Sevilla",
        pasatiempos: ["jugar videojuegos","javascript","escuchar música"],
        contacto: {
            email: "hsilben979@g.educaand.es",
            telefono: 624975516,
            insta: "@noQuieroDecirlo"
        },
        saludar () {
            console.log("Holaaaaaa");
        },
        saludarCompleto () {
            console.log("Hola, me llamo "+this.nombre);
        }
    }

    //DESESTRUCTURACIÓN DE UN OBJETO LITERAL

    const {nombre:n, dni:id, contacto:c} = personaCompleta;
    const {email:e, telefono:t, instagram:ig} = c;
    //personaCompleta.nombre;
    console.log(ig);

    //UNIR OBJETOS

    let producto = {
        nombreProducto: "Legía",
        precio: 2.95,
        marca: "Don Limpio",
    }
    let colores = {
        colorLíquido: "amarilo",
        colorRecipiente: "blanco",
        colorTapón: "azul"
    }

    let productoColor = {producto,colores}; //unir por referencia

    let productoColor2 = {...producto,...colores} //unir por copia




}