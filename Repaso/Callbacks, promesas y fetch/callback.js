//FUNCIONES CALLBACKS
//Se definen dentro de una funcion externa con un parametro, lo que van a devolver
// y se llaman como una arrow function, con ese mismo u otro parametro

const peliculas = [
    {
        id : 1,
        titulo : "episode 3",
        sipnosis : "La mejor"

    },
    {
        id : 2,
        titulo : "episode 2",
        sipnosis : "La segunda mejor"
    }
]

/**
 * @param {Number} id
 * @param {CallBack} funcCallback
 */
const buscarPelicula = (id, funcCallback) => {
    const pelicula = peliculas.find( (pelicula) => pelicula.id === id );

    if(pelicula)
        funcCallback(pelicula);
    else
        funcCallback("No se ha encontrado pelicula con el id:"+id);
}

//poner el parametro de la funcion callback para llamarla
buscarPelicula(2, (e)=>{console.log(e)} );

///////////////// con setTimeOut o setInterval, se utilizan de la misma forma
setInterval(()=>{
    buscarPelicula(2, (pelicula)=>{
        console.log(pelicula);
        buscarPelicula(1, pelicula => {
            console.log(pelicula);
        })
    } );
},2000);

//callback hell, solucion con promesas