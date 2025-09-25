"use strict" //usar variable sin inicializar prohibido con esto
{
    let a=4
    var b=5
    const c=6

    const myArray  = [1,2,3]
    //Aquí no falla aunque sea constante porque cuando es un array hace referencia a donde empieza el array,
    //  no al contenido. Puedo cambiar los valores, pero no el tamaño del mismo.
    console.log(myArray[0])
    myArray[0]=4
    console.log(myArray[0]) // aqui dará 4, el valor cambiado

    const number = 10
    printNumber();
    function printNumber() {
        console.log(number)
    }

    function app() {
        const number = 5
        printNumber();
    }
    app();


    /*Tipos de datos
    (primitivos)
        number
        bigint
        boolean
        string
    */

        let v=10.3
        let f=false
        let s="my string"

        //Conatenando
        console.log("the string is " + s)

        //
        console.log(`the string is ${s}`)

        let edad=23, nuevaEdad, incremeento =4; //En la asignación, todos son tipo number menos nuevaEdad, que tiene el tipo any
        const name="Rosa García"
        console.log(typeof incremento  == "number")
        nuevaEdad = edad + incremeento //Aquí aún sigue siendo tipo any
        console.log (nuevaEdad) //Aquí ya es number

        //Otros 2 tipos 

        let str1 = "hola"
        let str2 = str1 //copia del str1
        str1 = "goodbye"

        let v1 = ["hello"]
        let v2 = v1
        v1.push("goodbye")
        //en este caso v2 mostrará ambos resultados, ya que al traatarse de un array,
        //que no es un tipo primitivo, toma la referencia, no el valor

        v2 = [...v1] //Copia todo lo que tiene el dato no primitivo, por lo que no se queda con la referencia (SPREAD)

        let numero = 5
        console.log(numero.toString()) //Convierte el number en string

        let x= "2", y=5
        console.log(typeof x + " " + typeof y)
        console.log(x+y)  //25


        //COERCIÓN
         let arr = ["1","10","100","1000"]
         for(let i =0; i< arr.length &&  arr[i] < 500; i++) {
            console.log(i)
        } 
        //Aunque el array sea de strings, en el for los cambia a number para compararlo con la condición de <500
        
        //Metodos para convertir tipos de datos

        let num="100",num2="100.13"
        let num3=11

        let n =parseInt(num)
        console.log(n) //100  pero en number

        let n2 = parseFloat(num) //100.00
        let n3 = num3.toString() //11 pero como string


        console.table(v1) //Me pone en consola una tabla con las posiciones y valores del array.

        let answer = confirm("Would you like to cancel the suscription?") //Te da la opcion de aceptar o cancelar el alert

        prompt("Introduce a province") //Para dar una respuesta escrita

}