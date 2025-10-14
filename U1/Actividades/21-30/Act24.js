"use strict"
{
    function erasePattern(text,pattern) {
        return text.replaceAll(pattern,"");
    }

    alert(erasePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));
}