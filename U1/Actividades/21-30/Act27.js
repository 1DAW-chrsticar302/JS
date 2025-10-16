"use strict"
{
    function  analise(array) {
        let elementsNum = array.length;


        let paresNum = 0;
        let imparesNum = 0;        
        let pares="";
        let impares="";
        let sumaNeg = 0;
        let suma=0;
        let productoPos = 1;
        let primos="";
        let maxNumber=0;
        let minNumber=0;

        for(let i=0; i<array.length; i++) {
            if(array[i]%2==0) {
                paresNum++;
                pares+=array[i]+" ";
                productoPos*=array[i];
            }else{
                imparesNum++;
                impares+=array[i]+" ";
                sumaNeg+=array[i];
            }
            if(isPrimo(array[i])) {
                primos+=array[i]+" ";
            }
            if(array[i]>maxNumber) maxNumber=array[i];
            if(array[i]<minNumber) minNumber=array[i];
            suma+=array[i];
        }

        let media=parseFloat(suma/array.length);
        array.sort( (a,b)=> a-b); //Menor a mayor
        minNumber=array[0];
        let array1 = [...array.sort( (a,b)=> a-b)];
        array.sort( (a,b)=> b-a); //Mayor a menor
        maxNumber=array[0];
        let array2 = [...array.sort( (a,b)=> b-a)];



        let myarray = [
            ['Número de pares:',paresNum],
            ['Número de impares:',imparesNum],
            ['Números pares:',pares],
            ['Números impares:',impares],
            ['Suma de los negativos:',sumaNeg],
            ['Suma:',suma],
            ['Multiplicación de positivos:',productoPos],
            ['Números primos:',primos],
            ['Número más grande:',maxNumber],
            ['Número más pequeño:',minNumber],
            ['Media de todos los números:',media],
            ['De menor a mayor:',array1],
            ['Demayor a menor:',array2],
        ];

        return myarray;

    }

    function isPrimo(num){
        for(let i=2; i<num; i++) {
            if(num%i==0){
                return false;
            }
        }
        return true;
    }

    let array = new Array();
    array.push(1);
    array.push(2);
    array.push(3);
    array.push(5);
    array.push(7);
    array.push(9);
    array.push(13);
    array.push(17);
    array.push(23);
    array.push(4);

    console.table(analise(array));
}