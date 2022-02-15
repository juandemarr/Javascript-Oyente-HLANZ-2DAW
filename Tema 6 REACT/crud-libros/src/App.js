import './App.css';
import GuardarLibro from "./components/GuardarLibro";

function App() {
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-7">
          <GuardarLibro />
        </div>
      </div>
    </div>
  );
}

export default App;
