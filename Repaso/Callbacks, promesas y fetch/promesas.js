//se construyen con new Promise() la cual es una funcion arrow, pasandole como argumneto resolve y reject
//return new Promise((resolve,reject) => {})  
    //resolve, simboliza la consecucion de la promesa. Si siempre se va a conseguir, se omite el reject.
    //reject, la no consecucion de la promesa
        //estos dos parametros funcionan como las callback, se definen dentro con el parametro de lo que van a devolver,
        // y se llaman desde otra funcion con ese u otro parametro, da igual el nombre
//La promesa se consume con
    //.then() datos obtenidos cuando la promesa se cumple (consume el resolve). 
    //.catch() datos obtenidos cuando la promesa no se ha cumpliudo (consume el reject)
    //.finally() aqui accede si o si tanto si se cumple la promesa como si no
        //Al igual que las callbacks, es llamado con su parametro en una arrow function

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


const buscarPelicula = (id) => {
    const peli = peliculas.find( pelicula => pelicula.id === id);

    return new Promise((resolve, reject) => {
        if(peli)
            resolve(peli);
        else
            reject("No se encontro la pelicula con el id:"+id);
    });

}

//Para consumir la promesa, el resolve con .then() y el reject con .catch()
buscarPelicula(2)
    .then((e) => {console.log(e)})
    .catch((error) => {console.log(error)})
    .finally(console.log("Hello there"));