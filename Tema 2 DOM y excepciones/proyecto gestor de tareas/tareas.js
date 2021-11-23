/**
 * @author Juande
 * @description dos div. En el primero, un input para escribir la tarea y boton para guardarla
 * En el div de abajo apareceran las tareas
 * Si está vacío, al pulsar en el boton pondra borde rojo en el input
 * Restricciones: no puedo repetir tareas
 *                si me posiciono encima de una tarea => el texto de la tarea saldrá tachado y el puntero en manita
 *                Al hacer click la dejara tachada permanentemente
 */
 function crearTarea(e){
    //e.preventDefault();
    let div = document.createElement("div");
    let p = document.createElement("p");
    let textoP = document.createTextNode(texto);
    p.appendChild(textoP);
    div.appendChild(p);
    resultado.appendChild(div);
}

/////////////////////////
const texto = document.getElementById("textarea").value;
const resultado = document.getElementById("resultados");
document.getElementById("submitTarea").addEventListener("click",crearTarea);








