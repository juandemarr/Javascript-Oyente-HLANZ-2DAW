import { useState } from "react";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
//comprobacion a google para saber si estoy conectado
import firebase from "./firebase"; //fichero credenciales
import {getAuth, onAuthStateChanged} from "firebase/auth"; //libreria autorizacion

const autorizacion = getAuth(firebase);

function App() {
  const[usuarioGlobal,setUsuarioGlobal] = useState(null);//a false o null para q salte directamente el componete 
                                                        //SignIn del condicional

  //para gestionar el cambio en el estado de la sesion
  //usaremos onAuthStateChanged
  //le pasamos como primer parametro la autorizacion y como segundo la funcion que quiero usar en la comprobacion

  onAuthStateChanged(autorizacion,(usuarioFirebase)=>{ //este parametro lo da automaticamente google en su funcion,
                                    // le podemos poner el nombre que queramos al parametro
                                    //devuelve algo en caso de estar logueado o no.
    if(usuarioFirebase){
      //codigo en el caso de que tenga ya la sesion iniciada
      setUsuarioGlobal(usuarioFirebase);
    }else{
      //codigo en caso de ue no tenga la sesion iniciada
      setUsuarioGlobal(null);
    }
  })

  

  return (
    //para saber si estoy logueado o no, hay que pedir una comprobacion a google
    <div className="container">
      {usuarioGlobal ? <Home email={usuarioGlobal.email}/> : <SignIn />}
      
    </div>
      
  );
}

export default App;
