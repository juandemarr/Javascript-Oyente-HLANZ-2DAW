/**
 * @author Juande
 * @description escuhador de eventos en DOM
 */
//para cambiar una clase de CSS --> classList.replace(original,nuevo) lista de clases de
//classList.add() añade una clase
//classList.remove() elimina una clase
//classList.contains("clase1") devuelve true o false
//classList.replace("old","new")
//classList.toggle(xxx) <-- cambia un elemento de una clase;
//classList.toggle("active"); //si no tiene la clase la añade, si la tiene la quita

//e.target da  el elemento html que generado el evento y no cambia en el evento de propagacion
//e.currentTarget es por donde se va moviendo el evento en ese momento

const boton = document.getElementById("boton");
const caja = document.getElementById("caja");

//escuchamos los eventos
boton.addEventListener("click",(e)=>{
    //e --> hace referencia al evento que genera la accion
    console.log(`Has pulsado ${e}`);
    //e.target da  el elemento html que generado el evento
    console.log(`Has pulsado ${e.target}`);
});

caja.addEventListener("mouseenter",(e)=>{
    //para cambiar una clase de CSS --> classlist.replace(original,nuevo) lista de clases de
    caja.classList.replace("red","blue");
});
caja.addEventListener("mouseleave",(e)=>{
    caja.classList.replace("blue","red");
});

//Cambiar con doble click del boton el color de la caja de rojo a azul
//Al pulsar la tecla s que lo ponga en gris
boton.addEventListener("dblclick",(e)=>{
    caja.classList.replace("red","blue");
});
document.addEventListener("keyup",(e)=>{
    if(e.code === "KeyS"){
        caja.classList.add("red","green");
        caja.classList.remove("red");
    }    
});

/*
Eventos del raton:
- mouseenter -> cuando entramos en la zona que tiene el evento
- mouseleave -> cuando salimos de la zona del evento
- mousedown -> cuando pulsamos el boton izquierdo del raton
- mouseup -> cuando soltamos el boton izquierdo del raton
- mousemove -> cuando movemos el raton

Eventos del teclado:
- keydown -> cuando pulso una tecla
- keyup -> cuando suelto una tecla
- keypress -> cuando mantengo presionada una tecla
*/