import logo from './logo.svg';
import './App.css';
import grupoComponentes from './Componentes/Componente';
//import Componente from './Componentes/Componente';
import Estado from './Componentes/Estado';
import TarjetaFruta from './Componentes/TarjetaFruta';
import ImagenesAleatorias from './Componentes/ImagenesAleatorias';

const nombre = "juande";
const id = 3;
const pintar = true;
const meses = ["enero","febrero","marzo","abril"];
const datos = {nombre : "juande", correo : "email@email"};

function App() {
  return (
    <>
      <div className="App">
        {/* <grupoComponentes.Componente 
          nombre = {nombre} 
          dato = {pintar} 
          id = {id}
          meses = {meses}
          datos = {datos} />
        <grupoComponentes.Componente2 /> */}
        {/* <Estado /> */}
        <TarjetaFruta nombreFruta="Fresa" precio="2,45"/>
        {/* <TarjetaFruta nombreFruta="Manzanas" precio={2.85}/>
        <TarjetaFruta nombreFruta="Uvas"/> */}
        <ImagenesAleatorias nombre="Shao" size="small"/>
        <ImagenesAleatorias nombre="Shao" size="" numero="2"/>
        <ImagenesAleatorias nombre="Shao" size="large" numero="3"/>
      </div>
      <div>
        {/* a */}
      </div>
    </>
  );
}

export default App;
