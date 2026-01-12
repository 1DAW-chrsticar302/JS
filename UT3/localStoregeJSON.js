"use strict"
{

    // let myArray = ['gato','jirafa','rinoceronte'];
    // console.log(myArray);
    // localStorage.setItem("array",myArray);
    // let myNewArray = localStorage.getItem('array');
    // console.log(myNewArray);

    //Para pasar necesitamos json

    let myArray = ['gato','jirafa','rinoceronte'];
    console.log(myArray);
    localStorage.setItem("array",JSON.stringify(myArray));
    let myNewArray = JSON.parse(localStorage.getItem('array'));
    console.log(myNewArray);

}