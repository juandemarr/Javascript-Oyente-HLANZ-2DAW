/*CREAR ELEMENTOS
.createElement()
.createTextNode()
.aapendChild()
.removeChild()

*/
function crearParrafo(){
    var parrafo = document.createElement("p");
    var textoTextArea = document.getElementById("texto").value;
    var texto = document.createTextNode(textoTextArea);
    parrafo.appendChild(texto);
    document.getElementById("div1").appendChild(parrafo);

}

function crearImagen(){
    var img = document.createElement("img");
    img.setAttribute("src","10.png");
    img.setAttribute("width","400px");
    img.setAttribute("title","G.E.M.");
    img.setAttribute("alt","gem");

    document.querySelector("div#div1").appendChild(img);
}

function borrarPrimero(){
    var miDiv = document.getElementById("div1");
    var primerHijo = miDiv.firstChild;
    try{
        miDiv.removeChild(primerHijo);
    }catch(error){
        console.log(`Se produjo el siguiente error: ${error}`);
        //console.log("No hay mas elementos");
    }
    
}

document.getElementById("crearParrafo").addEventListener("click",crearParrafo);
document.getElementById("crearImagen").addEventListener("click",crearImagen);
document.getElementById("borrar").addEventListener("click",borrarPrimero);