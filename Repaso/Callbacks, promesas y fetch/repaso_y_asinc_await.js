/*Asincrona vs multihilo
asincrona parece que se estan realizando varias tareas a la vez
Multihilo se realizan varias tareas a la vez.
JS es single thread, un unico hilo. Con la asincronía, continua con las siguientes tareas y cuando 
tenga los datos recogidos, hara la tarea que los necesitaba, sin haber estado esperando

------ CALLBACK: funcion que se provee como parametro y es llamada por una funcion al completarse una tarea con exito
Callback sincronos o asincronos.
*/
console.log("-------CALLBACK");

function miCallback(mensaje){
    console.log(mensaje);
}

function bienvenido(nombre,miCallback){
    const mensaje = `Bienvenido D/Dña ${nombre}`;
    miCallback(mensaje);
}

bienvenido("Juande",miCallback);

//Ejemplo de callback "camuflado", en los addEventListener, ya sea al llamar a una funcion sin (), con funcion anonima o arrow function, 
//es un callback al definirse o estar en el argumento
document.getElementById("lanzar").addEventListener("click",function(){
    console.log("Has pulsado en lanzar");
},false) //por defecto es false, pero mejor se pone para evitar la propagacion del evento hacia arriba (efecto burbuja)

//.amp() recorre un array
const numeros = [1,2,3].map(function(num){
    return num * 2;
});

console.log(numeros);
//mejora, proemsas, para evitar el callback hell o excesiva identacion


/////////////////////////////////
/*-------PROMESAS
Es un objeto que representa un valor futuro, del que no tenemos la certeza de cuanto va a tardar o cuando va a terminar la operacion
Porporciona una API, poder realizar operaciones cuadno se obtenga un valor
Pueden asociarse a mecanismos sincoronos o asincronos. Este ejemplo es sincrono

Se pueden crear de dos formas:
-------new Promise((resolve, reject)=>{}) //con new, pasarle por parametro funcion flecha con resolve y reject
-------Promise.resolve()  //llamando a la clase y a su metodo resolve o reject
*/
console.log("-------PROMESAS");

function suma(numero1, numero2){
    return new Promise((resolve, reject) => {
        if(numero1 != 0 && numero2 != 0)
            resolve(numero1 + numero2);
        else
            reject("Solo puedo sumar numeros distintos de cero");
    });
}

//Para llamar a la promesa, hay que consumirla
//.then() ejecuta el resolve (exito) con un callback dentro (funcion flecha, anonima o funcion sin parentesis), si quieres que haga algo propio
//.catch ejecuta el reject (fallo), ''
//.finally() se ejecuta siempre, ''
suma(2,4)
    .then(console.log)
    .catch(console.log)
    .finally(console.log("HELLO THERE"));

///////
//Se pueden crear promesas llamando a la clase directamente
const todoOk = Promise.resolve("ok");
const noOk = Promise.reject("noOk");

//Para consumirla siemore con .then y .catch
todoOk.then(console.log);
noOk.catch(() => {console.log("badOk")});

/////////Otro ejemplo de funcion que devuelve una promesa, este se queda esperando a que el usuario permita o bloquee 
//el uso del micro, mientras se puede seguir ejecutando codigo
navigator.mediaDevices.getUserMedia({video : true , audio : true})
    .then(MediaStream => {
        //setStatusMessage("Conectado");
    })
    .catch(error => {
        //setStatusMessage("Error de conexión");
    })


//RESUMEN, crenado objetos de promesas, siendo sus parametros un callback, funcion flecha con resolve y reject
const promesa = new Promise((resolve,reject) => {})
//consumirla con .then y .catch
//Mejorea, async await

////////////////////////////////////////
/*-------FETCH API, mejora de XMLHTTPREQUEST
forma de consumir datos de una api externa
Devuelve una promesa, hay que consumirla

---API: definicion de las funciones que puede realizar un software junto con la metodologia de comunicacion
 entre diferentes componentes
API: application program interface

Dos formas:fetch o axios

fetch("url",{//cabeceras, opcionales, segun lo requiera cada api
    method:(GET),//GET; POST; PUT; DELETE
    headers:{
        Content-Type : application/json //
    },
    body:formData
})
*/
//.json() ya parsea la respuesta de texto a objeto json usable
//Ejemplo
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json()) //devuelve un objeto json ya usable, parseado
                                       //es una promesa, la cual tbn hay que consumir
                                       //da igual el nombre de este argumento
    .then(json => console.log(json))  //tbn da igual el nombre de este argumento


//OTRO PARECIDO AL FETCH PARA OBTENER DATOS DE FORMA ASINCRONA
/*---------ASYNC AWAIT, mas moderno
async palabra reservada que se pone delante de function para convertirla en ASINCRONA y PROMESA
al ser promesa, se llama o consume con .then() y .catch() de ser necesario. Recordemos que estos son callbacks, funcion flecha en su argumento,
 anonima o funcion sin parentesis, a no ser que no haga nada y solo sea un concole.log
*/
console.log("-------ASYNC AWAIT");

//En funcion normal
async function saludo1(){
    return "async en funcion normal";
}

saludo1().then(console.log);

//En funcion anonima
const saludo2 = async function(){
    return "async en funcion anonima"
}

saludo2().then(console.log);

//En funcion flecha
const saludo3 = async () => {
    return "async en funcion flecha";
}

saludo3().then(console.log)

//Como devuelve una promesa, ésta se puede declarar de forma EXPLICITA dentro de la funcion
async function mensaje4(){
    return Promise.resolve("llamando a la clase Promise y su metodo");
}

mensaje4().then(console.log);

/*---------AWAIT
palabra reservada que solo se puede usar en funciones async
congela la ejecucion de la funcion async hasta que haya sido resuelta la promesa.
Ejemplo: peticion a la api, con funcion asincrona js seguira haciendo otras tareas, pero de esta forma, ese
proceso de recibir los datos, en vez de esperar si hay un mini retardo, se queda congelado hasta que obtiene los datos

----await se pone en donde me devuelvan una promesa, en donde obtengo ese resultado
Equivalente a .then().
*/

async function bienvenido(){
    return "hello there await";
}

//este await para la ejecucion de bienvenido hasta que recibe los datos
async function consumirBienvenido(){
    const contenido = await bienvenido(); //esta variable no contiene la promesa, sino su resultado, el contenido
    console.log(contenido);
}

consumirBienvenido();

// con setTimeout
async function funcionAsincrona(){
    let promesa = new Promise((resolve,reject)=> {
        setTimeout(()=>resolve("async await con setTimeout"),4000);
    });

    let recibirPromesa = await promesa;
    console.log(recibirPromesa);
}

funcionAsincrona();

/*--------ASYNC AWAIT COMBINADO CON FETCH
Ventajas, codigo mas legible sin largas encadenaciones de .then(), hacen lo mismo
como ambos son promesas, ambos son asincronas

como no tenemos .catch(), lo pondriamos dentro de un 
try{

}catch(){

}

*/
//con fetch
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then( response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log("Error al conectar"));

//equivalente con async await
async function apiFetch(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let json = await response.json();
        console.log(json);
    }catch(error){
        console.log(error);
    }

}

apiFetch();


//Lo mismo con fichero local
fetch("info.txt")
    .then(response => response.text())
    .then(json => console.log(json));


async function textFetch(){ 
    let response = await fetch("infoo.txt"); //como aqui tenemos la variable con todo el contenido de la respuesta,
                                            // podemos controlar su status

    console.log(response.status);  //200
    console.log(response.statusText);  //ok

    if(response.status === 200){
        let json = await response.text();
        console.log(json);
    }
    if(response.status === 404){ //da error en consola, gestionar con try catch
        let json = await response.text();
        console.log("Hola error");
    }
    
}

textFetch();

//adicional, con try catch()
async function textFetch2(){ 
    try{
        let response = await fetch("infoo.txt");
        let json = await response.text();
        if(response.status === 200)
            console.log(json);//Aunque de error, esto siempre me devolvera una respuesta afirmativa con el codigo 
                              //dentro
        if(response.status === 404)
            console.log("No se pudo obtener el fichero");
    }catch(e){
    }
    
}

textFetch2();

/*Segun el tipo de dato a obtener, los metodos del response cambian:
arrayBuffer()
blob()
json()
text()
formData()
Async/Await
*/