import React from 'react';
import firebase from "../firebase";
import {getAuth} from "firebase/auth";

const autorizacion = getAuth(firebase);

const Home = ({email}) => {
  return (
    <div>
        <p>Estoy en home {email}</p>
        <button 
            className="btn btn-danger"
            >Cerrar sesion</button>
    </div>
  );
};

export default Home;
