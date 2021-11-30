/**
 * @author Juande
 * @description
 */
function inicio(){
    /*probar 
    for(h2 of Array.from(document.getElementsByTagName("h2"))){

    }*/
    for(let i = 0 ; i < document.getElementsByTagName("h2").length ; i++){
        document.getElementsByTagName("h2")[i].addEventListener("click",recorrer);
    }
    //Al clicar en h2, aparece en div texto: Ha pulsado en h2 con texto: ... e hijos: ...
    
}

function recorrer(e){//esta e viene del elemento que genró ese evento
    let texto = "";
    let h2 = e.target //contenido del elemento que ha lanzado el evento.En este caso la etiqueta h2 completa
    //console.log(h2);
    //console.log(h2.textContent);
    texto += "Has elegido " + h2.textContent;//textContent da el contenido textual de un tag
    
    //para seleccionar el padre html
    let padre = h2.parentElement;
    texto += " que está dentro de la etiqueta con un id: " + padre.id + ". ";
    
    //para seleccionar el hermano
    //let hermano = h2.nextSibling;//NO USAR
    //<div xxxx> cuidado porque nos traemos como hermanos las etiquetas \n o retornos de carro
    //<div xxx>
    let hermano = h2.nextElementSibling; //este ul es un list element, no se puede contabilizar.
    //para el numero de hermanos ul cogemos su composicion li, por eso el numero de hijos
    texto += "El número de hermanos es: " + hermano.children.length + ": ";

    let hijo = hermano.children;
    
    for(let h of hijo){
        texto += h.textContent + ", ";
    }
    console.log(texto);



    
}

//Dado un array de 8 elementos pintarlo 



//---------------------------Inicio script-----------
window.addEventListener("load",inicio);