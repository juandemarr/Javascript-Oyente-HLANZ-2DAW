/**
 * @description uso de las callbacks
 * Una funcion de callback es una funcion que se pasa a otra funcion como argumento (ultimo argumento),
 * que posteriormente es invocado dentro de una funcion externa
 * 
 * Funcion que se define dentro, y se llama en el parametro de una funcion externa como funcion arrow
 * 
 * Problema: dificiles de depurar
 * Solucion: promesas
 *
 */
const peliculas = [
    {
        id : 1,
        titulo : "titulo pelicula 1",
        sinopsis : "contenido pelicula 1"
    },
    {
        id : 2,
        titulo : "titulo pelicula 2",
        sinopsis : "contenido pelicula 2" 
    }
];
/**
 * 
 * @param {Number} id 
 * @param {CallBack} callback 
 */

const buscarPelicula = (id,callback) =>{
    //filtro por id
    const pelicula = peliculas.find((item) => item.id === id);
    if(pelicula){
        //aqui entro cuando encuentra la pelicula
        callback(pelicula);
    }else{
        //aqui entro cuando no encuentra la pelicula
        callback("No se ha encontrado la pelicula con ID: "+id);
    }
}

buscarPelicula(2,(pelicula)=>{
    console.log(pelicula);
});//poner el parametro de la funcion callback con arrow para llamarla
//devuelve un objeto, si no lo encuentra undefined (equivale a false). Se peude capturar como error

/////////////////////////////////////////SETINTERVAL Y SETTIMEOUT
//setInterval(funcion,milisegundos);
//setTimeout(funcion,milisegundos);

/* const reloj = document.getElementById("reloj");

const temporizador = setInterval(()=>{
    reloj.innerHTML = (new Date().toLocaleTimeString());
},1000);
 */
var tiempo = setInterval(miReloj,1000);

function miReloj(){
    let d = new Date();
    let t = d.toLocaleTimeString();
    document.getElementById("reloj").innerHTML = t;
}

setTimeout(()=>{
    buscarPelicula(2,(pelicula)=>{
        console.log(pelicula);
        buscarPelicula(3,(pelicula)=>{//callback hell, solucion con promesas
            console.log(pelicula);
            buscarPelicula(12,(pelicula)=>{
                console.log(pelicula);
            });
        });
        
    });
},3000);
console.log("estoy al final del codigo");