// Selección de un formulario:
//Para el nombre, min 8 caracteres, max 40, con acentos, guiones, dos espacios => nombre-nombe2 apellido1 apellido2
//const formulario = document.getElementById("formulario"); //por id
//const formulario2 = document.forms["formulario"]; //de todos los formularios el que se llama asi
//const formulario3 = document.forms[0]; //de todos los forms el de la pos 0
//const formulario4 = document.getElementsByTagName("form")[0]; //array de etiquetas form, la de la pos 0

//objetos del formulario
//const miInputs = document.querySelectorAll("#formulario input");//array con todos los input
//const inputNombre = formulario.elements[2]; //no usar ya que hay que saber el numero de la pos del elemento
//const inputNombre = formulario.elements["nombre"];
//const sexo = document.getElementsByName("sexo"); //radio buttoms o cualquier cosa emparejados por name. Devuelve array
//sexo[0].checked //devuelve true si esta marcado
//inputNombre.value //devuelve el contenido


//formas de ejecutar el codigo js al finalizar de cargar toda la informacion de la pag web
window.onload = main; //esta funcion va sin parentesis, para que no se ejecute al isntante, sino cuando termine la carga
/*Otra forma
window.onload=>{
}
*/
function main(){
    const btnEnviar = document.getElementById("btnEnviar");
    btnEnviar.addEventListener("submit",validarTodo,false);//false lo veremos mas adelante, equivale al return false de la function, no devuelve nada
    //2 forma de aplicar addEventListener, usando una funcion anonima arrow
    /*
    document.addEventListener("submit", (e) =>{
    })
    */
}

function validarTodo(e){
    const inputNombre = document.getElementById("nombre").value;
    const inputEdad = document.getElementById("edad").value;
    const checkSexo = document.getElementsByName("sexo");
    const checkTerminos = document.getElementById("terminosAcuerdo");
    const p = document.getElementById("warning");

    //validar cada campo en una funcion distinta
    if (validarNombre(inputNombre) && validarEdad(inputEdad) && (validarSexo(checkSexo[0]) || validarSexo(checkSexo[1])) 
        && validarTerminos(checkTerminos)){
        //Para cambiar el contenido de p, lo traigo y con .innerHTML("hola");
        //o creando nodos y appenChild(), lo veremos mas adelante.
        p.innerHTML="OK";
        p.style.color = "green";
    }else{
        e.preventDefault(); //evita que se ejecute la accion por defecto, en este caso el boton enviaria el 
        //formulario recargando la pag. Lo pondremos al dar errores para que no los envie los datos
        p.innerHTML="Error";
        p.style.color = "red";
        //Otra forma: crear clase en css y asignarla a p
    }
}

function validarNombre(valor){
    let expNombre = new RegExp();
    expNombre = /^([a-zA-ZÀ-ÿ-\s]+\s){1}([a-zA-ZÀ-ÿ]+\s)([a-zA-ZÀ-ÿ]+)/;
    return expNombre.test(valor);
}
function validarEdad(valor){
    let expEdad = new RegExp();
    expEdad = /^([1-9]\d?)$/;
    //expEdad = /^([1-9][0-9]|[1-9])$/
    return expEdad.test(valor);
}
function validarSexo(valor){
    return valor.checked;
}
function validarTerminos(valor){
    return valor.checked;
}

//Crear array con una lista de errores, para el correcto ponerlo "", luego ver la pos y llevar el foco a ese input.
//Mostrarlo en el p