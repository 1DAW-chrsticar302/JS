"use strict"
{

    console.log(document);
    console.log(window.document);
    console.log(document.head);
    console.log(document.documentElement);
    console.log(document.body);
    console.log(document.images);
    console.log(document.links);
    console.log(document.styleSheets);
    console.log(document.scripts);
    console.log(document.forms);
    console.log(document.title);
    console.log(document.doctype);
    console.log(document.characterSet);
    
    let a = document.links;

    for (elem of a) {
        console.log(elem);
    }

}