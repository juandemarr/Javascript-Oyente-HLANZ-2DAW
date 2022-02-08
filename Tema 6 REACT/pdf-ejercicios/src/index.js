import React from 'react';
import ReactDOM from 'react-dom';
import Boton from './components/Boton';
import ImgClase from './components/ImgClase';
import ImgFuncional from './components/ImgFuncional';
import ImgFlecha from './components/ImgFlecha';
import {MyHelloComponent} from './components/CompClaseEJ4';
import MyHelloComponentFunctional from './components/CompFuncionalEJ4';
import Temporizador from './components/Temporizador';
import './index.css';


ReactDOM.render(
  <div>
    <Boton />
    <ImgClase />
    <ImgFuncional />
    <ImgFlecha />
    <MyHelloComponent />
    <MyHelloComponentFunctional />
    <Temporizador/>
  </div>
  ,document.getElementById('root')
);

