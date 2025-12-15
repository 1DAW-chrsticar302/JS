"use strict"
{

    let opcion1 = document.getElementById('opcion1');
    let opcion2 = document.getElementById('opcion2');

    opcion1.addEventListener('blur', function(event) {
        switch(opcion1.value) {
            case 'Alicante': {
                opcion2.innerHTML = '<option value="Alicante Capital">Alicante Capital</option>'+
                '<option value="Elche">Elche</option>'+
                '<option value="Orihuela">Orihuela</option>'
                break;
            }
            case 'Castellon':{
                opcion2.innerHTML = '<option value="Castellon Capital">Castellón Capital</option>'+
                '<option value="Oropesa">Oropesa</option>'+
                '<option value="Vinaroz">Vinaroz</option>'
                break;
            }
            case 'Valencia':{
                opcion2.innerHTML = '<option value="Valencia Capital">Valencia Capital</option>'+
                '<option value="Torrent">Torrent</option>'+
                '<option value="Mislata" selected>Mislata</option>'
                break;
            }
            case 'notSelected':{
                opcion2.innerHTML = '<option value="notSelected">No seleccionado</option>'
                break;
            }
        }
    });
}