"use strict"
{
    document.addEventListener("mousemove", function (datos) {
            // Obtenemos la posición del ratón
            const x = datos.clientX;
            const y = datos.clientY;

            // Modificamos el contenido del <p>
            document.getElementById("p").textContent =
                "Posición del ratón: " + x + "X | " + y + "Y";
    });
}