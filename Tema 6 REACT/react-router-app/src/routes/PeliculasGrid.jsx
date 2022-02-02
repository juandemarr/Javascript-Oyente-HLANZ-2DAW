import React, { useState } from 'react';
import { Link, Outlet, useSearchParams } from 'react-router-dom';
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
    <div style={{display:"grid" , gridTemplateColumns:"1fr 1fr"}}>
      <div>
      <h1>Peliculas</h1>
      
      <input
        type="text"
        placeholder="Buscar pelicula"
        value={filtrado}//nunca puede ser null, ni al principio cuando esta pintando el componente, por eso se hace lo de arriba
        //necesario para que permanezca la palabra en el input al igual que en la url, aun refrescando
        onChange={handleFiltrar}
      />

      <ul>{/* .results es xk en el archivo los datos estan ahí dentro */}
        {datos.results.filter( (pelicula) => {
          const nombrePelicula = pelicula.title.toLocaleLowerCase();
          return nombrePelicula.includes(filtrado.toLocaleLowerCase()) 
        }).map((pelicula) => {
          return (/*rutas relativas*/
            <li key={pelicula.id}>
              <Link to={pelicula.id.toString()}>{pelicula.title}</Link>
            </li>
          )
        })}
      </ul>
      </div>
      <div>
      <article>
        <Outlet />
      </article>
      </div>
    </div>
  );
};

export default PeliculasGrid;
