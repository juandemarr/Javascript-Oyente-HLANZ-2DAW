import { useState } from 'react';
import './App.css';
import CargarLibros from './components/CargarLibros';
import GuardarLibro from "./components/GuardarLibro";

const libroFake = {
  id : "",
  data: {
    titulo: "",
    autor: "",
    descripcion: ""
  }
}

function App() {
  const [libroGlobal, setLibroGlobal] = useState(libroFake);

  //--------------pintamos-------------
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12">
          <GuardarLibro libroGlobal={libroGlobal} setLibroGlobal = {setLibroGlobal}/>
          <CargarLibros libroGlobal={libroGlobal} setLibroGlobal = {setLibroGlobal}/>
        </div>
      </div>
    </div>
  );
}

export default App;
