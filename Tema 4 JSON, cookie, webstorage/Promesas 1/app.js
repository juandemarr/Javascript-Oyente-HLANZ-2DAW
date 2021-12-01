/**
 * @description uso de promesas JS
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

//Promesas
//se construyen con new Promise((resolve,reject) => {}) 
//resolve si se consigue, reject si no se consigue. Si siempre se va a conseguir, se omite el reject.
//Ambos pasados como argumento de funcion arrow
const buscarPelicula = (id) => {
    const pelicula = peliculas.find((item) => item.id === id);
    return new Promise((resolve,reject)=>{
        if(pelicula)
            resolve(pelicula);
        else
            reject("No he encontrado la pelicula con id: "+id);
            //todo esto se sustituye abajo por el parametro inventado --> error
    });
};

//Para obtener los resolver tengo que llamar a .then()
//Para obtener los reject tengo que llamar a .catch()
//Tambien puedo usar .finally() que se mostraria siempre

buscarPelicula(3)
    .then((pelicula) => {console.log(pelicula);})
    .catch((error)=>{console.log(error);})
    .finally(console.log("Un placer buscar peliculas por ti"));

//Ahora tarda dos 2 segundos
setTimeout(()=>{
    buscarPelicula(3)
        .then((pelicula) => {console.log(pelicula);})
        .catch((error)=>{console.log(error);})
        .finally(console.log("Un placer buscar peliculas por ti"));
},2000)

