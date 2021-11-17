/*CREAR ELEMENTOS
.createElement()
.createTextNode()
.appendChild()
.removeChild()

array.from convierte una coleccion o lo que sea en un array
En html al darle a enter ya se considera eso un hijo
*/
function crearParrafo(){
    var parrafo = document.createElement("p");
    var textoTextArea = document.getElementById("texto").value;
    var texto = document.createTextNode(textoTextArea);
    parrafo.appendChild(texto);
    document.getElementById("div1").appendChild(parrafo);

}

function crearImagen(){
    let ruta = prompt("Introduzca la ruta de la imagen:","10.png");//el segundo parametro es el por defecto
    if(ruta !=null){
        var img = document.createElement("img");
        img.setAttribute("src",ruta);
        img.setAttribute("width","400px");
        img.title="G.E.M.";//es indistinto punto o .setAttribute
        img.setAttribute("alt","gem");
        
        document.querySelector("div#div1").appendChild(img);
        
    }else alert("Ruta incorrecta");//este es de cancelar el prompt, no de la ruta incorrecta
    
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

function borrarUltimo(){
    var miDiv = document.getElementById("div1");
    var ultimoHijo = miDiv.lastChild;
    try{
        miDiv.removeChild(ultimoHijo);
    }catch(error){
        console.log(`Se produjo el siguiente error: ${error}`);
        //console.log("No hay mas elementos");
    }
    
}

function sustituirPrimerHijo(){
    var miDiv = document.getElementById("div1");
    var parrafo = document.createElement("p").appendChild(document.createTextNode("Hello"));
    try{
        miDiv.replaceChild(parrafo,miDiv.firstChild);//nuevo,viejo
    }
    catch(error){
        console.log("No hay hijos");
    }
}



document.getElementById("crearParrafo").addEventListener("click",crearParrafo);
document.getElementById("crearImagen").addEventListener("click",crearImagen);
document.getElementById("borrar").addEventListener("click",borrarPrimero);
document.getElementById("borrarUltimo").addEventListener("click",borrarUltimo);
document.getElementById("sustituirPrimero").addEventListener("click",sustituirPrimerHijo);