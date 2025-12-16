"use strict"
{

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const t1 = document.getElementById('texto1').value;
        const t2 = document.getElementById('texto2').value;
        
        const ordenar = (str) => str.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
        
        if (ordenar(t1) === ordenar(t2)) {
            alert('Son anagramas. Formulario enviado.');
            this.submit();
        } else {
            alert('No son anagramas.');
        }
    });
}