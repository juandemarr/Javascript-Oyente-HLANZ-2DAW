const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");//array para traer todos los input que hay dentro del formulario, 
//con espacio entre medias 
const boton = document.getElementById("btnAceptar");

const expresiones = { //objeto definidos con llaves
    nombre : /([a-zA-ZÀ-ÿ-]+\s){2}[a-zA-ZÀ-ÿ-]+/,
    password : / /,
    tfno : / /
}