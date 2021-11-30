/**
 * @description Flujo de eventos (burbuja)
 */

function info(evento){
    console.log(`Hola soy el evento ${this.className}
    y el click lo lanzo ${evento.target.className}`);
    //this es ese div
    //.className devuelve el nombre de la clase de ese objeto html
}

const eventosDiv = document.querySelectorAll(".flujos-eventos div");
console.log(eventosDiv);

eventosDiv.forEach(div => {
    div.addEventListener("click",info,{
        capture:true,
        //once:true,//solo se ejecuta una vez el evento, se sigue propagando pero ejecutandose solo 1 vez
    });//poner false es igual a no ponerlo ya que es el valor predeterminado, o poner llaves y escribir capture
    //false propaga el evento desde dentro (div 3) hasta el de afuera (div uno)
    //true lo propaga al reves, desde afuera primero (div uno) hasta dentro (div tres)
});

/* Para evitar la propagacion:
* 1 solucion: e.stopPropagation()
* mejor solucion: poner al elemento de mas arriba el escuchador de eventos, document.addEventListener
y dentro de su funcion poner evento.target.matches("nodo a buscar")
*/

function fin(e){
    const cuarto = document.getElementById("cuartoDiv").id; 
    if(e.target.matches("#"+cuarto));
        console.log("Cuarto div sin propagacion");
}

document.addEventListener("click",fin);


//evita que haga el evento de enlace, apareciendo los eventos de click creados
//añadir dentro de la funcion click evento.preventDefault();


//Para evitar que al hacer click en el enlace salgan los eventos de click. COMO?