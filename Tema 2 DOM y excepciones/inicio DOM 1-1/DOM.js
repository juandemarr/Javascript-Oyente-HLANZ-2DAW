/*CLIENT-SIDE AVANCED
formularios y validacion, expresiones regulares, eventos, DOM(nodos, modificacion, propiedades), 
BOM(window,location,history,navigator),manejadores de eventos

BOM: objeto en el que se representa el navegador, no solo el documento.
//////////////////////////////
DOM: estructura del documento HTML, representacion del documento como un grupo de nodos y objetos estructurados
que tienen propiedades y metodos. Esencialmente, conecta las paginas web a scripts o lenguajes de 
programacion, permitiendo modificar dinamicamente su contenido, estructura o estilo.

El nodo padre o raiz es document
los nodos pueden tener atributos y texto. Cada nodo es una entidad propia que se aisla

*DOCUMENT:
-Cuando cargamos un documento en el navegador, se crea un objeto document
-Nodo raiz del documento HTML
-sirve como punto de entrada de contenido de la pag
-Incluye todos los demas elementos

Acceso a los elementos del DOM:
-document.querySelector("valor") devuelve un resultado. Puede aplicarse a una clase o id de CSS
-document.querySelectorAll("valor") devuelve un array => NodeList (incluye intros)
-getElementById("nombreId") devuelve 1 elemento
-getElementsByClassName() devuelve => HTML Collection. No array, recorrer con for of
-getElementsByTagName devuelve 1 array

-etiqueta.setAttribute("nombreAtributo","valor");
-etiqueta.className = "miClase";

Usar selectores que devuelvan element no nodes

Ejemplos:
console.log(document.head); //muestra la estrucutra en modo texto del head
console.log(document.body);
console.log(document.getElementById("mi-id"))
console.log(document.querySelector("#mi-id"));
console.log(document.querySelector("p"));
console.log(document.querySelectorAll("p"));

innerHTML lo interpreta como HTML
innerText lo interpreta como texto plano

*/

function cambiotextos(){
    for(etiqueta of document.getElementsByTagName("p"))
        etiqueta.innerHTML = "<b>"+ etiqueta.innerText +"</b>";
    //con forEach no sirve ya que aunque sea un array, es una coleccion HTML
    //cambiar solo las palabras primer segundo y tercer
    /*for(etiqueta of document.getElementsByTagName("p")){
        etiqueta.innerText.
    }
    */
}

function cambiarClases(){
    for(etiqueta of document.getElementsByTagName("p")){
        etiqueta.setAttribute("class","miClase");
        //etiqueta.className = "miClase";
    }
}

function quitarClases(){
    for(etiqueta of document.getElementsByTagName("p")){
        etiqueta.setAttribute("class","");
    }
}

//Funciones arriba, eventos abajo
document.getElementById("cambiarTextos").addEventListener("click",cambiotextos);
document.getElementById("cambiarClases").addEventListener("click",cambiarClases);
document.getElementById("quitarClases").addEventListener("click",quitarClases);