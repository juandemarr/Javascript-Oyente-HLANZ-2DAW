import logo from './logo.svg';
import './App.css';
import EstadosFuncionales from './components/EstadosFuncionales';
import APIWeather from './components/APIWeather';

function App() {
  return (
    <div className="App-header">
      {/* <EstadosFuncionales/> */}
      <APIWeather/>
    </div>
  );
}

export default App;
