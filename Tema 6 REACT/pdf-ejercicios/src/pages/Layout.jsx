import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <nav>
            <Link to="/Boton">Boton</Link>{" - "}
            <Link to="/ImgClase">ImgClase</Link>{" - "}
            <Link to="/ImgFuncional">ImgFuncional</Link>{" - "}
            <Link to="/ImgFlecha">ImgFlecha</Link>{" - "}
            <Link to="/MyHelloComponent">MyHelloComponent</Link>{" - "}
            <Link to="/MyHelloComponentFunctional">MyHelloComponentFunctional</Link>{" - "}
            <Link to="/Temporizador">Temporizador</Link>{" - "}
            <Link to="/ContenidoInputDebajo">ContenidoInputDebajo</Link>{" - "}
            <Link to="/ApiWeather">ApiWeather</Link>{" - "}
            <Link to="/JSONPlaceholderUsers">JSONPlaceholderUsers</Link>{" - "}
            <Link to="/UserPosts">UserPosts</Link>
        </nav>

        <section id="main">
            <Outlet/>
        </section>
    </>
  )
}

export default Layout