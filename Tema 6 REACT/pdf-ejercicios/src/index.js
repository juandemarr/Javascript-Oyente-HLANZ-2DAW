import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Boton from './components/Boton';
import ImgClase from './components/ComponenteImg/ImgClase';
import ImgFuncional from './components/ComponenteImg/ImgFuncional';
import ImgFlecha from './components/ComponenteImg/ImgFlecha';
import {MyHelloComponent} from './components/ComponenteBasico/CompClaseEJ4';
import MyHelloComponentFunctional from './components/ComponenteBasico/CompFuncionalEJ4';
import Temporizador from './components/Temporizador';
import ContenidoInputDebajo from './components/Input/ContenidoInputDebajo';
import ApiWeather from './components/ApiWeather/ApiWeather';


ReactDOM.render(
  <div>
    <Boton />
    <ImgClase />
    <ImgFuncional />
    <ImgFlecha />
    <MyHelloComponent />
    <MyHelloComponentFunctional />
    <Temporizador/>
    <ContenidoInputDebajo />
    <ApiWeather/>
  </div>
  ,document.getElementById('root')
);

