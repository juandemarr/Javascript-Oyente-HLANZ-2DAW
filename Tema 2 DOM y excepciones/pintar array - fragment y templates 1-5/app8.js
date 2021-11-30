/**
 * Pintar con Javascript un array de 5 elementos
 * miArray = ["Enero", "Febrero", "Marzo", "Abril"]
 */
const miArray = ["Enero","Febrero","Marzo","Abril"];

//en orden de prioridad
let p = document.getElementById("id-parrafo");
let p2 = document.querySelector("#id-parrafo");
let p3 = document.querySelector(".parrafo");
let p4 = document.getElementsByClassName("parrafo")[0];

//selecciono el nodo
let span = document.getElementById("new-span");

//creo el elemento ul
let ul = document.createElement("ul");
span.appendChild(ul);

miArray.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    //li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
});//<-- este codigo genera REFLOW, cada vez que hacemos un appendChild se repinta la pagina, 
//por lo que si el bucle es grande, se ralentizara mucho

miArray.forEach(item => {
    ul.innerHTML += `<li>${item}</li>`;
});//<-- este codigo genera REFLOW


//Sin REFLOW. se genera un FRAGMENT invisible por detras sin pintarlo, hasta que este finalizado y recien lo pinta
//FRAGMENT es un trozo de codigo con nodos que permite ser accedido como el document

let fragmento = document.createDocumentFragment();
miArray.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    fragmento.appendChild(li); //linea que cambia
});
ul.appendChild(fragmento); //este fragmento sustituye al ul
span.appendChild(ul);
//mejora TEMPLATES.

/*
en html se pone la etiqueta <template> y dentro es donde ejecutaremos todo el codigo js
    si hay intros el dom lo trata como un nodo de texto tambien, con contenido ""
no añade ni cambia nada en html. Ver ejemplo pdf apuntes
*/