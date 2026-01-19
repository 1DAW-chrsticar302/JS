"use strict"
{

    // const resultado = fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(response => response.json())
    // .then(datos => {
    //     console.log(datos[0].title)
    // })    

    // async function obtenerPost() {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    //     const post = await response.json()
    //     console.log(post)
    // }

    // obtenerPost()



    // const resultado = fetch("https://jsonplaceholder.typicode.com/posts")
    // .then(response => {
    //     console.log(response.status)
    //     console.log(response.ok)
    //     if(response.ok) {
    //         return response.json()
    //     }else{
    //         ;
    //     }
    // })
    // .then(datos => {
    //     console.log(datos[0].title)
    // }) 
    // .catch(error => { console.log("Hubo un error: " + error) })


    // fetch("resources/text.txt")
    // .then(response => response.text())
    // .then(datos => console.log(datos))


    // fetch("resources/text.txt")
    // .then(function(response) {
    //     let datos = response.text()
    //     return datos
    // })
    // .then(function(texto){
    //     console.log(texto)
    //     console.log(texto.length)
    // })



    // fetch("resources/flores.jpg")
    // .then(response => response.blob())
    // .then(blob => {
    //     console.log(blob)
    //     console.log(blob.size)
    //     console.log(blob.type)


    //     let objectUrl = URL.createObjectURL(blob)
    //     localStorage.setItem('imagen',JSON.stringify(objectUrl))
    // })

    // let myBtn = document.createElement('button')
    // myBtn.textContent = "Mostrar imagen"
    // myBtn.addEventListener('click', function() {
    //     let fromlocalstorage = localStorage.getItem('imagen')
    //     let img = document.createElement('img')
    //     img.setAttribute('src',JSON.parse(fromlocalstorage))
    //     document.body.append(img)
    // })
    // document.body.append(myBtn)



    /**
 *  Carcar una imagen del disco duro, la guardar en localStorage y la muestra en el dom
 * 
 */

    const fileInput = document.getElementById("fileInput");
    const img = document.getElementById("preview");

    document.getElementById("saveBtn").addEventListener("click", async () => {

        console.log("ENTRA");
        const file = fileInput.files[0];
        if (!file) return alert("Selecciona una imagen");
        console.log(file);
        // Crear una URL temporal para poder usar fetch
        const blobUrl = URL.createObjectURL(file);
        console.log(blobUrl)
        // Fetch del archivo
        const response = await fetch(blobUrl);
        const blob = await response.blob();
        console.log(blob)
        // Convertir a string codificado en base64
        const base64 = await blobToBase64(blob);
        console.log(base64)
        // Guardar en localStorage
        localStorage.setItem("foto", base64);

        // Mostrar en el DOM
        img.src = base64;

        URL.revokeObjectURL(blobUrl); // el navegador pierde la referencia  para liberar
    });

        // Helper
    function blobToBase64(blob) {
        return new Promise((callback) => {
            const reader = new FileReader(); // lectura asincrona de un fichero
            //evento loadend -> se dispara cuando se ha leído por completo un archivo (con éxito o sin éxito)
            // reader.result -> devuelve el contenido del archivo
            reader.onloadend = () => callback(reader.result);
            reader.readAsDataURL(blob); // codifica el string a string en base64
        });
    }



    // Cargar imagen guardada al recargar la página
    const savedPhoto = localStorage.getItem("foto");
    if (savedPhoto) {
        img.src = savedPhoto;
    }



    /**
     * leer una api en formato JSON: https://randomuser.me/api
     * 
     */

    let myRequest = new Request("https://randomuser.me/api")
    fetch(myRequest)
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        console.log(data.results[0].name.last)
    })
    .catch(function(error){
        console.log("ERROR: " + error)
    })

    //with arrow function

    let myRequest2 = new Request("https://randomuser.me/api")
    fetch(myRequest)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data.results[0].name.last)
    })
    .catch((error) => {
        console.log("ERROR: " + error)
    })

    //with asyc and await
    async function hola() {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        console.log(data.results[0].name.last) 
    }

    let apiObtain = async function () {
        try{
            let response = await fetch('https://randomuser.me/api')
            let data = await response.json()
            console.log(data)
        }catch(err) {
            console.log('ERROR: ' + err)
        }
    }
    apiObtain()

}
