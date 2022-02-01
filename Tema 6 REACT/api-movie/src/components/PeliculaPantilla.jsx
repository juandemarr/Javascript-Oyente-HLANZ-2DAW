import React, { useEffect, useState } from 'react';
import getPeliculas from '../helpers/getPeliculas';
import Pelicula from './Pelicula';
import estilos from './css/PeliculaPlantilla.module.css';

const PeliculaPantilla = () => {
    //estados
    const [peliculas,setPeliculas] = useState([])
    const consultarApi = () => {
        getPeliculas()
        .then((data) => {
            setPeliculas(data?.results);
            //console.log(data.result);
        })

        //si quiero gestionar un error de la promesa, .catch((error)=>console.log(error))
        //como hemos puesto try catch en el otro lado, ya se captura si hay error
    }

    //efectos, funciones
    useEffect(() => {
        consultarApi();
    },[]);

    //pintado de coponentes
    return (
        <ul className={estilos.moviesGrid}>
            {peliculas.map((peli,index) => (
                <Pelicula
                    key={peli.id}
                    title={peli.title}
                    poster_path={peli.poster_path}
                    id={peli.id}
                />
            ))}{/* con parentesis en arrow function ahorra poner el return */}
        </ul>
    );
};

export default PeliculaPantilla;
