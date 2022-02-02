import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import PeliculasGrid from './routes/PeliculasGrid';
import About from './routes/About';
import Home from './routes/Home';
import Pelicula from './routes/Pelicula';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>{/* se engloba para decir que su contenido, el de las pag adonde se dirige), 
        se pinte en una parte de la pag principal, se indica con <outlet/>, ahí se insertara el contenido de estas pag*/}
        <Route index element={<Home />} />{/* La principal se sustituye por index */}
        <Route path="peliculas" element={<PeliculasGrid/>} >
         <Route path=":peliculaID" element={<Pelicula/>} /> {/* este nombre despues de : da igual, luego lo usaremos para coger ese valor*/}
        </Route>
        <Route path="about" element={<About/>} />
        <Route path="*" element={<Navigate replace to ="/" /> } />
      </Route>
        
    </Routes>
</BrowserRouter>
,
  document.getElementById('root')
);
