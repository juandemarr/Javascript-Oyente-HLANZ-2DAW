/**
 * Ejercicio 1 Modifica el codigo para que devuelva una promesa
    function retardo(ms){

    }
    retardo(funtion3000).then(() => {
        alert('se ejecuta despues de 3 segundos');
    });
*/
/**
 * 
 * @param {Number} ms 
 * @returns {Promise}
 */
function retardo(ms){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(`Estoy retenido ${ms/1000} segundos`);
        },ms);
    })
}

//lo que se quiere hacer, en caso de traer info etc. Esto consume la promesa .then etc
retardo(3000)
.then((respuesta) => {//lo que devuelve el resolve, da igual como se llame
    alert(respuesta);
})

/**
 * Ejercicio 3
 * Crea una promesa que en el resolve añada una fecha al localstorage y en el reject lance un error
 */
/**
 * 
 * @param {Date} fecha 
 * @returns {Promise}
 */
function insertarFecha(fecha){
    return new Promise(function(resolve,reject){
        if(typeof Storage != undefined){
            //puedo alamcenar en localStorage
            resolve(localStorage.setItem("Fecha",fecha));//esto se puede hacer en el resolve o abajo en el .then
            //en uno de los dos. Preferible en then
        }else{
            //no puedo almacenar en localStorage
            reject("Tu navegador no puede almacenar en Storage");
        }
    });
}

//antes comprobar si getItem("Fecha") != null y luego eliminarlo con localStorage.removeItem("Fecha")
insertarFecha(new Date(Date.now()).toLocaleDateString())
.then(() => 
    console.log('Fecha almacenada -> '+localStorage.getItem("Fecha"))
)
.catch(console.log);//para imprimir el mensaje de reject, al haber sido puesto en texto, 
//llamando solo a console.log lo muestra

/**
 * Uso de la API fetch("https://jsonplaceholder.typicode.com/albums")
 */
const urlAPI = "https://jsonplaceholder.typicode.com";
const codigoHTML = document.querySelector("#aplicacion");

//FORMA INCORRECTA
fetch(`${urlAPI}/users`)
.then(response => response.json())
.then((users) => {
    const template = users.map((user) => `<li>${user.name} email: ${user.email}</li>`);
    codigoHTML.innerHTML = `<ul>${template}</ul>`;
})

//FORMA CORRECTA, CON DOM
const ul = document.createElement("ul");

fetch(`${urlAPI}/users`)
.then(response => response.json())
.then((users) => {
    users.forEach(user => {
        let elementoLi = docuemnt.createElement("li");
        elementoLi.appendChild(document.createTextNode(`${user.name} email: ${user.email}`));
        ul.appendChild(elementoLi);
    });
    codigoHTML.appendChild(ul);
})
.catch("Error al consumir la API");

/**
 * async await, para q sea asincrona
 */
//forma normal
//fetch devuelve una promesa, uso then y parseo el json, devuelve otra promesa, otro then
fetch("https://jsonplaceholder.typicode.com/posts/1")
.then((response) => response.json())
.then((posts) => {console.log(posts)})
.catch((error) => {console.log(error)})

//con async await
async function fetchAPI(){
    //q el fetch guarde el resultado en esta consulta, esperando a q cargue los datos
    //se pone await por cada promesa obtenida, "equivalente al then"
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let posts = await response.json();
    console.log(posts);
}

fetchAPI();

//con catch hay q usar try en async await
//si el fetch se hace bien, devuelve en el status un 200. Esto no es obligatorio ponerlo
async function fetchAPI(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        debugger;//pausa la ejecucion en chrome, como un punto de ruptura
        if(response.status === 200){
            let posts = await response.json();
            console.log(posts);
        }
        
    }
    catch(error){
        console.log(error);
    }
    
}

fetchAPI();

/**
 * GET
 */
fetch("https://jsonplaceholder.typicode.com/todos")
.then((response) => response.json())
.then((posts) => {
    console.log(posts);
});

/**
 * POST para enviar datos y añadirlo a la api
 * headers(especifico de cada API) method y body, este ultimo enviarlo en formato json
 */
fetch("https://jsonplaceholder.typicode.com/posts",{
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    },
    method:"POST",
    body:JSON.stringify({
        "userId":"201",
        "title":"Hola mundo"
    })
})
.then((response) => response.json())
.then((users) => {console.log(users)});
    
/**
 * Para actualizar usar lo mismo pero con PUT
 * Para borrar usar DELETE
 */
fetch("https://jsonplaceholder.typicode.com/posts/1",{
    method:'DELETE',
});

/**
 * Promesa de promesa, llamarla dentro de la primera
 * Ejecutara primero los paises al tener menos seg, pero quiero que primero se ejecte los usuarios y cuando
 * termine se ejecuten los paises
 */
const listaUsuarios = [
    {id:1, nombre:"Luis",codPais:2},
    {id:2, nombre:"Luis",codPais:1}
]

const listaPaises = {1:"Francia", 2:"España"};

function obtenerUsuarios(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listaUsuarios);
        },3000);
    })
}

function obtenerPaises(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listaPaises);
        },2000);
    })
}

//Para consumirlas
obtenerUsuarios()
.then((usuarios) => {console.log("Usuarios: ",usuarios)});

obtenerPaises()
.then((paises) => {console.log("Paises: ",paises)});

//Para el orden de la ejecucion
const misUsuarios = obtenerUsuarios();
//poner la funcion abajo en obtenerPaises

misUsuarios
.then((usuarios) => {
    console.log("Usuarios: ",usuarios);
})
.then((paises) => {
    console.log("Paises: ",obtenerPaises);
});
