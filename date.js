"use strict"
{
    let fecha = new Date();
    console.log(fecha);
    let fecha2 = new Date("1979/5/30 14:30:15");
    let fecha3 = new Date(1979, 4, 30, 14, 30, 15);
    console.log(fecha3);

    let fecha4 = new Date (1979, 4, 30);
    console.log(fecha4);

    let fecha5 = new Date("1979/05/30");
    console.log(fecha5);

    //GET Methods

    let date = new Date("2018/01/30 15:30:10.999");
    console.log(date);
    console.log(date.getDay); //1 Monday
    console.log(date.getDate); // The day of the Month
    console.log(date.getMonth); // 9
    console.log(date.getFullYear); //2025
    console.log(date.getYear()); // 125 (starts in 1900)
    console.log(date.getSeconds);
    console.log(date.getMinutes);
    console.log(date.getHours);
    console.log(date.getMilliseconds);
    console.log(date.getTimezoneOffset()); // 0 - 1 h = -60 minutes
    console.log(date.getTime()); // En milisegundos desde 01/01/1970

    // METODOS SET
    date.setMonth(4);
    date.setDate(30); // DAY
    date.setFullYear(1979);
    date.setHours(14); //setHours (HH, MIN, SEG)
    date.setMinutes(30);
    date.setSeconds(15);

   console.log(date.toDateString()); // TE LO DEVUELVE EN UN STRING
   
   let d= date.toDateString();
   console.log(d);
   alert(d);

   let d2= date.toLocaleDateString();
   console.log(d2);
   alert(d2);

   console.log(date.toUTCString);
   console.log(date.toUGMTString());
   

    //TEMPORIADORES
    setTimeout(cadenaFuncion,tiempo); //se ejecuta una sola vez
    setInterval(cadenaFuncion,tiempo);  //Se ejecuta indefinidamente

    clearTimeout(id)/clearInterval(id); //se le pasa el id y lo anula

    prompt("Tell me your name","Peter"); //Se ejecuta antes siempre, ya que es una ventana emergente aparte
    setTimeout(function () {
        let d = new Date().toLocaleDateString();
        console.log(d);
    },3000); //A los 3 seundos sale la fecha de hoy

    let id = setInterval(function() {   //Así se le asigna el id del intervalo, para poner luego clearInterval(id)
        console.log(date.toLocaleDateString);
    },2000);

    
}