"use strict"
{
const papel = document.getElementById("papel");
const papelera = document.getElementById("papelera");

papelera.addEventListener("dragover", function (event) {
    event.preventDefault();
});

papelera.addEventListener("drop", function (event) {
    event.preventDefault();
    papelera.src = "papelera_llena.jpg";
    papel.style.display = "none";
});
}