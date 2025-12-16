"use strict"
{

    let listaServidores = ["terra.es", "google.com", "marca.es", "yahoo.es"];
    let email = document.getElementById('email');
    let mensaje = document.getElementById('mensaje');

    let btnSubmit = document.getElementById('submitBtn');
    btnSubmit.addEventListener('click',function validarEmail() {

        let regex = /^.+@.+\..+$/;
        
        if (!regex.test(email.value)) {
            mensaje.textContent = 'Formato de email incorrecto';
            setTimeout(()=>{
                mensaje.textContent = '';
            },2000);
            return;
        }
        const servidor = email.value.split('@')[1];
        if (listaServidores.includes(servidor)) {
            mensaje.textContent = 'Email válido';
        } else {
            mensaje.textContent = 'Servidor no admitido';
            setTimeout(()=>{
                mensaje.textContent = '';
            },2000);
        }
    })
}