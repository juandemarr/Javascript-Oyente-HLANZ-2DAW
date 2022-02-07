import React from 'react';
import ReactDOM from 'react-dom';
import Boton from './components/Boton';
import ImgFlecha from './components/ImgFlecha';
import ImgFuncional from './components/ImgFuncional';
import ImgClase from './components/ImgClase';
import {MyHelloComponent} from './components/CompClaseEJ4';
import MyHelloComponentFunctional from './components/CompFuncionalEJ4';
import './index.css';

ReactDOM.render(
  <>
    <Boton />,
    <ImgFlecha />,
    <ImgFuncional />,
    <ImgClase />,
    <MyHelloComponent />
    <MyHelloComponentFunctional />
  </>,
  document.getElementById('root')
);

