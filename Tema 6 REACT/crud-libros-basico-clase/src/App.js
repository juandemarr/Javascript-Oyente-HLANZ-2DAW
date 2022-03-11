import { useState } from "react";
import "./App.css";
import CargarLibros from "./components/CargarLibros";
import GuardarLibro from "./components/GuardarLibro";

// Esta podría ser mi posible estructura de datos.
// lo intento hacer así, porque en firebase, el id no está en el mismo
// lugar que la información de la consulta.
const libroFake = {
  id: "",
  data: {
    titulo: "",
    autor: "",
    descripcion: "",
  },
};

function App() {
  // ----------- estados ------------------------------
  const [libroGlobal, setLibroGlobal] = useState(libroFake);

  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-11">
          <GuardarLibro
            libroGlobal={libroGlobal}
            setLibroGlobal={setLibroGlobal}
          />
          <CargarLibros
            libroGlobal={libroGlobal}
            setLibroGlobal={setLibroGlobal}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
