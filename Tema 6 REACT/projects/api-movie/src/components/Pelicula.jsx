import React from 'react';
import estilos from './css/Pelicula.module.css';

const Pelicula = ({title, poster_path, id}) => {
    const  urlImg = "https://image.tmdb.org/t/p/w500"+poster_path;



    //pintamos
    return (
        <>
        <li className={estilos.movieCard}>
            <img 
                className={estilos.movieImg} 
                src={urlImg} 
                alt={title} 
                width={230} 
                height={345}/>
            <div>
                {title}
            </div>
        </li>
        </>
    );
};

export default Pelicula;
