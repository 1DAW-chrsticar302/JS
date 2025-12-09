"use strict"

{
    let form = document.getElementById("idForm1");

    let txtfld = form.nTexto;
    let urlfld = form.nUrl;

    console.log(txtfld);
    console.log(urlfld);

    // let form2 = document.querySelector("#idForm2");

    let inputText = document.querySelector("#idTexto1");
    
    inputText.addEventListener("input", (ev) => {
        console.log(ev.data);
        console.log(ev.target.value);
    });

    inputText.addEventListener("change", (ev) => {
        console.log(ev.target.value);
    });


    let textArea = document.getElementById("idTextArea1");

    textArea.addEventListener("input", (ev) => {
        console.log(ev.data);
        console.log(ev.target.value);
    });

    textArea.addEventListener("change", (ev) => {
        console.log(ev.target.value);
    });

    let radios = document.getElementsByName("nrButton1");
    
    radios.forEach(r => {
        console.log(r);
        console.log(r.checked);
    });

    for (let r of radios) {
        r.addEventListener("change", (ev) => {
            if(r.checked) {
                console.log("Marked value: " + ev.target.value);
            }
        });
    }

    let checks = document.getElementsByName("nCheck1");

    checks.forEach(c => {
        console.log(c);
        console.log(c.value);
    });
}