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
        array.sort( (a,b)=> b-a); //Mayor a menor
    }

    function isPrimo(num){
        for(let i=2; i<num; i++) {
            if(num%i==0){
                return false;
            }
        }
        return true;
    }
}