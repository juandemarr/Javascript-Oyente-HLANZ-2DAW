import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import datos from '../peliculas.json';

const Pelicula = () => {
    const params = useParams();
    const navigate = useNavigate();

    function handleVolver(){
        navigate("/peliculas");
    }

    function getPeliculaID(){
        return datos.results.find( (pelicula) => pelicula.id === parseInt(params.peliculaID) );
        //este pelicula es el nombre que quiera darle al objeto que esta dentro de datos.results, a lo que se le
        //ha aplicado el find
    }

    const peliculaBuscada = getPeliculaID();

    return (
        <div>
            <h2>{peliculaBuscada.title}</h2>
            <img width={230} height={320} src={"https://image.tmdb.org/t/p/w500" + peliculaBuscada.poster_path} alt={peliculaBuscada.title}/>
            <p>{peliculaBuscada.overview}</p>
            <section>
                <button onClick={handleVolver}>Volver</button>
            </section>
        </div>
    );
};

export default Pelicula;
