"use strict"
{
    //Funión anónima
    (function (){
        console.log("función anónima");
    })();

    (function (param1,param2,param3=30){
        console.log("función anónima2");
        console.log(param1);
        console.log(param2);
        console.log(param3);
    })();

    (function (param1,param2,param3=30){
        console.log("función anónima3");
        console.log(param1);
        console.log(param2);
        console.log(param3);
    })(10,20);

    const v = (function (){            //Solo puede usarse si devuelve algo
        console.log("función anónima4");
        return 0;
    })();

    let f = function () {           //este tipo si puede
        console.log("función 5");
    }

    //ArrowFunctions

    const s = (n1,n2) => n1+n2;

    console.log(s(3,2));

}