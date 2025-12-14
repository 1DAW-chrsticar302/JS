"use strict"
{
    const dniInput = document.getElementById("dni");
    const mensaje = document.getElementById("mensaje");
    const form = document.getElementById("formDni");
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    // Función que valida el DNI
    function validarDNI(dni) {
        const patron = /^([0-9]{8})([A-Z])$/;
        const resultado = dni.match(patron);
        if (!resultado) return false;
        const numero = parseInt(resultado[1]);
        const letra = resultado[2];
        const letraCorrecta = letras[numero % 23];
        return letra === letraCorrecta;
    }
    // a) Validar al perder el foco
    dniInput.addEventListener("blur", function () {
        const dni = dniInput.value.toUpperCase();
        if (validarDNI(dni)) {
            mensaje.textContent = "DNI correcto";
            mensaje.className = "ok";
        } else {
            mensaje.textContent = "DNI incorrecto";
        }
    });
    // b) Validar al enviar el formulario
    form.addEventListener("submit", function (event) {
        const dni = dniInput.value.toUpperCase();
        if (!validarDNI(dni)) {
            event.preventDefault(); // Cancela el envío
            mensaje.textContent = "No se puede enviar: DNI incorrecto";
        }
    });
}