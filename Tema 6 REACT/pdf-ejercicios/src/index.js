import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Boton from './components/Boton';
import ImgClase from './components/ImgClase';
import ImgFuncional from './components/ImgFuncional';
import ImgFlecha from './components/ImgFlecha';
import {MyHelloComponent} from './components/CompClaseEJ4';
import MyHelloComponentFunctional from './components/CompFuncionalEJ4';
import Temporizador from './components/Temporizador';
import Ej6 from './components/Ej6';


ReactDOM.render(
  <div>
    <Boton />
    <ImgClase />
    <ImgFuncional />
    <ImgFlecha />
    <MyHelloComponent />
    <MyHelloComponentFunctional />
    <Temporizador/>
    <Ej6 />
  </div>
  ,document.getElementById('root')
);

