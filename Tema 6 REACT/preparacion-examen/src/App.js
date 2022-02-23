import { useState } from 'react';
import Componente1 from './components/Componente1';
import Componente2 from './components/Componente2';
import Componente3 from './components/Componente3';

import './App.css';
//GET <-- TRAER
//POST <-- INSERTAR
//DELETE <-- ELIMINAR
//PATCH PUT <-- los dos actualizan, patch puede modiifcar un unico campo mientras que put solo todo el objeto

const URL = "http://localhost:5000/users";
const fake = {
  nombre:"pepe",
  visible:true
}
const user={
  //"id": 1,  //no hay que poner el id, este lo hace por su cuenta
  "name": "HELLO THERE",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
  "street": "Kulas Light",
  "suite": "Apt. 556",
  "city": "Gwenborough",
  "zipcode": "92998-3874",
  "geo": {
  "lat": "-37.3159",
  "lng": "81.1496"
  }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
  "name": "Romaguera-Crona",
  "catchPhrase": "Multi-layered client-server neural-net",
  "bs": "harness real-time e-markets"
  }
  }

function App() {
  const [global,setGlobal] = useState(fake);

  const handleCargar = async () => {

    const respuesta = await fetch(URL);
    const data = await respuesta.json();

    console.log(data.map((user) => ("NOMBRE: ",user.name)));

  }
  const handleInsertar = async () => {
    const respuesta = await fetch(URL,{
      method:"POST",
      body:JSON.stringify(user), //convierte de js a json
      headers:{
        "Content-Type":"application/json; charset=UTF-8"
      }
    });

    await respuesta.json();

    handleCargar();
  }
  const handleActualizar = () => {
    //PATCH se le indica un id, y con eso solo se tiene que indicar el campo a actualizar. Mirar placehodler
  }
  const handleEliminar = async (id) => {
    const respuesta = await fetch(URL+"/"+id,{
      method:"DELETE"
    });

    await respuesta.json();
    
    handleCargar();
  }


  return (
    <div className="App">
      <header className="App-header">
        <div>
          Nombre: {global.nombre}
          {global.visible ? <p>Visible</p> : <p>Invisible</p>}
        </div>

        <Componente1 global={global} setGlobal={setGlobal} handleEliminar={handleEliminar}/>

        <button onClick={handleCargar}>Cargar</button>
        <button onClick={handleInsertar}>Insertar</button>
        <button onClick={()=>handleEliminar(2)}>Eliminar</button>{/*este numero es el id (propiedad) del usuario*/}
        <button onClick={handleActualizar}>Actualziar</button>
      </header>
    </div>
  );
}

export default App;
