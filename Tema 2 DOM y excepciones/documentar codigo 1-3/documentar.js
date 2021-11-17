/**
 * @author Juande
 * @description Creacion de parrafos, enlaces y listas 
 * 
 */

function inicio(){
    let contenido = document.getElementById("contenido");
    
    //Creacion de parrafos:
    contenido.appendChild(document.createElement("p").appendChild(document.createTextNode("Hello There")));

    //Creacion de enlaces
    let a = document.createElement("a");
    let textoA = document.createTextNode("Google");
    a.appendChild(textoA);
    a.setAttribute("href","https://www.google.es");
    contenido.appendChild(a);

    /**
     * En esta linea vacia se explica los que hace la funcion. Creamos listas a traves de js
     * @param {Object} contenedor 
     * @param {String} tipo 
     * @param {Number} numElementos 
     * @param {String} textoBase 
     */
    //esto escribiendo encima solo /** le indicamos el tipo. Al llamarla me sugerirá los tipos indicados
    let milista = (contenedor, tipo = "ul", numElementos = 1, textoBase) =>{//los valores en los parametros son
        //por defecto, en caso de no ponerlos.
        //Se ponen al final
        if(tipo == "ul" || tipo == "ol"){
            let lista = document.createElement(tipo);
            for(let i = 1 ; i <=numElementos ; i++){
                //lista.appendChild(document.createElement("li").appendChild(document.createTextNode(textoBase + " " + i)));
                //En una sola linea no lo hace bien
                let li = document.createElement("li");
                let liTextNode = document.createTextNode(textoBase + " " + i);
                li.appendChild(liTextNode);
                lista.appendChild(li);
            }
            contenedor.appendChild(lista);

        }else{
            console.log("error de lista");
        }
        

    };
    milista(contenido,"ol",10,"Hello there");
}
//Crear 2 funciones para crear equis parrafos y enlaces, documentandola



//--------------Inicio de la aplicacion-----------
window.onload = inicio;