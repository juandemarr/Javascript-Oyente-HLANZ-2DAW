import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import datos from '../peliculas.json';

const PeliculasGrid = () => {
  //Para realizar busquedas en formularios usaremos las queryParams o llamados parámetros de búsqueda
  //para ello necesitamos el Hook useSearchParams

  const [searchP , setSearchP] = useSearchParams();
  
  const handleFiltrar = (e) => {
    setSearchP({search : e.target.value})
  }

  const filtrado = searchP.get("search") ?? "" //si es distinto de null o undefined, quedate con lo primero

  return (
    <>
      <h1>Peliculas</h1>
      
      <input
        type="text"
        placeholder="Buscar pelicula"
        value={filtrado}//nunca puede ser null, ni al principio cuando esta pintando el componente
        onChange={handleFiltrar}
      />

      <ul>{/* .results es xk en el archivo los datos estan ahí dentro */}
        {datos.results.map((pelicula) => {
          return (/*rutas relativas*/
            <Link to={pelicula.id.toString()}><li key={pelicula.id}>{pelicula.title}</li></Link>
          )
        })}
      </ul>
    </>
  );
};

export default PeliculasGrid;
