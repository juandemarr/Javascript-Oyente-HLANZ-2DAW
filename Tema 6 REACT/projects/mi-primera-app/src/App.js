import logo from './logo.svg';
import './App.css';
import grupoComponentes from './Componentes/Componente';
//import Componente from './Componentes/Componente';
import Estado from './Componentes/Estado';

const nombre = "juande";
const id = 3;
const pintar = true;
const meses = ["enero","febrero","marzo","abril"];
const datos = {nombre : "juande", correo : "email@email"};

function App() {
  return (
    <>
      <div className="App">
        <grupoComponentes.Componente 
          nombre = {nombre} 
          dato = {pintar} 
          id = {id}
          meses = {meses}
          datos = {datos} />
        <grupoComponentes.Componente2 />
        <Estado />
      </div>
      <div>
        a
      </div>
    </>
  );
}

export default App;
