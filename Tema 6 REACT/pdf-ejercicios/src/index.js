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
import JSONPlaceholderUsers from './components/UsersAndEmails/UserAndEmail';
import UserPosts from './components/UsersAndPosts/UserPosts';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Index from './pages/Index';
import UserComments from './components/UsersAndPosts/UserComments';

ReactDOM.render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout/>}>
        <Route index element={<Index/>}/>
        <Route path="Boton" element={<Boton />} />
        <Route path="ImgClase" element={<ImgClase />} />
        <Route path="ImgFuncional" element={<ImgFuncional />} />
        <Route path="ImgFlecha" element={<ImgFlecha />} />
        <Route path="MyHelloComponent" element={<MyHelloComponent />} />
        <Route path="MyHelloComponentFunctional" element={<MyHelloComponentFunctional />} />
        <Route path="Temporizador" element={<Temporizador />} />
        <Route path="ContenidoInputDebajo" element={<ContenidoInputDebajo />} />
        <Route path="ApiWeather" element={<ApiWeather />} />
        <Route path="JSONPlaceholderUsers" element={<JSONPlaceholderUsers />} />
        <Route path="UserPosts" element={<UserPosts />}>
          <Route path=":idUser" element={<UserComments />}/>
        </Route>
        <Route path="*" element={<Navigate replace to="/" />}/>
      </Route>

    </Routes>
  </BrowserRouter>
  ,document.getElementById('root')
);

