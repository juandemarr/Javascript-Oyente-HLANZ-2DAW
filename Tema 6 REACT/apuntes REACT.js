/*libreria, no framework (conjunto de paquetes ya juntados y listos para usar)
crea un dom virtual (fragment) y luego lo añade
Cada elmento es un componente con html, css y js
Minima expresion de codigo - kernel o nucleo (react)
modulos aparte para pintar en la pag web, rutas, testing, form etc. Se cargan solo los modulos necesarios
 (react y render para pintar pag web)
archivo manifiest que indica los modulos cargados etc.
al instalar modulos se añaden solos a package.json
los principales son react y react-dom

Cosas necesarias:
//Node.js
npm o yarn
//en chrome instalar plugin react developer tools

ir dentro de la carpeta del proyecto
comprobar en la terminal de visual code node -v y npm -v

-------npx create-react-app nombreProject
npx instala unos modulos en concreto, siq ueremos uno a uno habra que hacerlo con npm

para instalar yarn dentro de la carpeta del proyecto:
Node.js >=16.10
corepack enable
Node.js <16.10
npm i -g corepack

Ó
yarn init -2
-------npm install -g yarn
para actualizar yarn
//yarn set version stable

instalar extension react
-------yarn start para abrir la web

en la carpeta public esta index.html, pag principal

en src index.css es el estilo general que afecta a toda la aplicacion
en src index.js es el archivo prinicpal donde se pondran los componentes etc. aqui arranca la applicacion

Se puede borrar de src reportVitals, setupTests, y quitar esas lineas de index.js

los import, la primera letra siempre en may, aunque la libreria vaya en minuscula
Los componentes no hay que poenrles la extension del archivo

ReactDOM.render(lo que voy a pintar , donde lo voy a pintar)

El nombre de los archivos de los componentes siempre empiezan en mayusculas

Si preformatea el codigo poniendolo en una linea y quitando los parentesis del return de app.js porque hay solo una linea
, MAL, parentesis necesarios
Lo de adrento es jsx
Las etiquetas sin etiquetas de cierre, ponerles al final espacio y barra <br />

en las etiquetas en lugar de class, al hacer referencia a class de js, se usa className

Todo tiene que estar dentro de una etiqueta que englobe todo, como div, o sino queremos una fragment, que se representa con
<>

</>

En lugar de ReactDOM.render, se puede usar solo render, el nombre del modulo en concreto, haciendo destructuring
import {render} from 'react-dom'; destructuring, usando el nombre de los modulos
usarlo como:
render{

}

------COMPONENTES
2 formas, de clas o de funcion
------De clase

class Componente extends Component{
    render(){
        return (
            <h1>Mi primer componente</h1>
        )
    }
}

------De funcion
function Componente(){
    return (
        <h1>Componente funcional</h1>
    );
}

const Componente = (props) => (
<>
    <h1>Mi primer componente {props.nombre} -- {props.id} -- 
    {props.dato ? "pintado" : "no pintado"}
    </h1>
    {2+2}
    <ol>
        {props.meses.map((mes,index) => (//map() tiene dos arg, dato y clave
            <li key={index}>{mes}</li>
        ))}
    </ol>
</>
);

.map para recorrer array

El render lo unico obligatorio en cada ocmponente


babeljs.io en try out, marcar todos los settings menos time travel, y activar abajo react
Se escribe a la izq html y a la derecha como lo hace react
babel traduce jsx

----------------------
Para poner js dentro de jsx, indicar le nombre de la variable entre {}
Estas var se pasan como props en los argumentos del componente funcional, y se meten al llamar al componete en app.js
este props es un objeto, por eso se llama con props.nombre (como se vio en babel try out)

DATOS QUE SE PUEDEN PASAR A LAS PROPS al llamar al compnente
string, {var creada arriba}, numeros {2.85}

Para listas hay que indicarle a cada elemento un key como atributo de la etiqueta


------EXPORTAR
export default Componente abajo del todo o poner delante de la clase export default class etc.

Para usarlo, importarlo en otro archivo con:
import Componente from './Componentes/Componente';
si no se usa el default, poner {Componente}

VARIOS
Para exportar mas de un componente en un archivo:
export default {Componente,Componente2};

Para importarlo, crear un grupo y luego usar <grupoComponente />
import grupoComponentes from './Componentes/Componente';

COMENTAR
{/*  */}

/*Los componentes tienen 3 esatdos, cuando se crean, modifican y eliminan

----EVENTOS
Eventos sinteticos, se traducen a eventos del DOM que no usa
En sintaxis camelCase

----CONTEXTO THIS
//estas llaves crean un contexto, por lo que el this.state no funciona ya que ese this se refiere 
///al contexto de la funcion, no al de arriba del constructor

-----BINDEO
o binding sobre los metodos que el this pierde el contexto de clase

en las arrow function no hace falta ya que coge el this desde arriba

----//con arrow function para el esatdo
    //cogemos el valor del estado que repinta la vista al cambiar, en este caso cantidad, y al lado setMismonombre, esta 
    //es una funcion
    const [cantidad, setCantidad] = useState(0); //en useState se pone el valor inicial de cantidad, si fuese un objeto 
    //seria {}, como es un numero ponemos 0

    import React, {useState} from "react"; //este useState se llama HOOK

------ATRIBUTOS DE CLASES
para añadir mas de una clase, si la cogemos convariable, tenemos que definir esa var arriba e irle concatenando las clases
className={classNameImg}

--- OTRO HOOK, useEffect
useEffect, para que al arrancar la app se ejecute, al menos una vez
useEffect(() => {
    console.log("Se ejecuta al inicio solo una vez");
},[])

useEffect(() => {
    console.log("Se ejecuta cuando modificas el state de contador1");
},[contador1]);


--- propiedad children

<Datos edad={edad}>
    <Hijo/>
</Datos> /* aqui se consume */
/*
import React from 'react';

const Datos = ({edad},children) => {
  return <div>
      {edad} o si lo llamo arriba props sin {}, aqui seria props.edad 
      {children} parametro especial children, coge lo que se pone dentro del componente
  </div>;
};

export default APIWeather;


SOFTWARE para consumir y verificar API (get/post/etc)
SOFTWARE control de versiones:
http://gitextensions.github.io/
//Para comprobar la consumicion de apis, app:postman

registrarse en https://openweathermap.org/api --> api del tiempo
pinchar en api, current weather data (la primera), subscribe, get APIKEY
https://www.themoviedb.org/?language=es-ES -->registrarse ne esta para entrar a la de abajo
Aqui en configuracion, api, generate new api, developer
            sitio web
            
https://developers.themoviedb.org/3



extension vscode es7 + react
alt + shift + flecha para abajoo arriba
ctrl + ç comenta una linea
alt + flechas arriba mueve un bloque de codigo

instalar json formatter extension para chrome

RESUMEN
npx create-react-app nombre
//////Para empezar nuevo proyecto: quitar los archivos test, de index quitar reportVitals,
yarn start para abrir

rafce escribe solo un componente funcional
en app escribimos <NombreComponente y al darle a click agrega auto el import y el nombre del componente

para usar el useState, hay que importar, dando al cubo morado lo autocompleta al escribir useState

en la carpeta helpers dentro de src, haremos los get de la api

async await devuelve siempre una promesa

/////////////////////
en el navegador, iinspector, network, 

////////
Al componete de la pelicula, odnde colocalmos la imagen, mejor ponerle el width aqui para que reserve el espacio

CSS dinamicos, usar modulos
nombre.module.css
importar en el componente:import estilos from './css/Pelicula.module.css';
y usarlos dentro como: <li className={estilos.movieCard}>

//Para eliminar un paquete, yarn remove


//////////////////RUTAS
react-router-dom v.6
--- npm install react-router-dom
ó
--- yarn add react-router-dom


el esquema de rutas se pone en la pag de entrada: index.js

<BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />} />    //entre llaves se pone a donde quiero ir, nombre del componente
        <Route path="/pelicuals" element={<PeliculasGrid/>} />
        <Route path="*" element={<Navigate replace to ="/" /> } />    // * => todo lo que no sea lo anterior lo envia a / con navigate replace to
    </Routes>
</BrowserRouter>

en la pag en lugar de poner el enlace a, seria <Link to="/">Home</Link>


--OUTLET
Para que no se repinte todo en otra pag, tienen que verse los enlaces, por lo que los englobaremos en una ruta 
que apunta a la pag principal. Para indicar donde se pintaran, se pone <Outlet /> y ahí se pintaran esas rutas

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>     // se engloba para decir que todo eso se quede en una parte dentro de la pag principal, y hay que indica adonde quiero apuntar
        <Route index element={<Hoome />} />     // La principal se sustituye por index 
        <Route path="peliculas" element={<PeliculasGrid/>} />
        <Route path="about" element={<About/>} />
        <Route path="*" element={<Navigate replace to ="/" /> } />
    </Route>
      
  </Routes>
</BrowserRouter>
,
document.getElementById('root')
);


Para recorrer un array con .map() y dentro una funcion flecha, la cual siemre tiene que tener un return()
o cambiar las llaves de la arrow function por () , que tienen implicito el return
{datos.results.map((pelicula) => {
    return (
        <li key={pelicula.id}>{pelicula.title}</li>
    )
})}


//Recoger variables de la url
HOOK useParams()

en el index.js
<Route path="peliculas/:peliculaID" element={<Pelicula/>} /> // este nombre despues de : da igual, 
luego lo usaremos en params.peliculaID

en el componente PeliculasGrid
<Link to={pelicula.id.toString()}><li></li></Link> hay que convertir la ruta a texto, por si el id es un numero

este numero que envio a la ruta, se recoge con esto en el componente de esa ruta con:
const parms = useParams();
params.peliculaID al ser la url, es string


//PARA VOLVER A OTRA RUTA; NECESARIO OTRO HOOK useNavigate()
const navigate = useNavigate();

    function handleVolver(){
        navigate("/peliculas");
    }


//BUSCADOR
https://www.google.es/search?q=gato //este search?q es una query, lo simularemos con useSearchParams()

//Para realizar busquedas en formularios usaremos las queryParams o llamados parámetros de búsqueda
//para ello necesitamos el Hook useSearchParams

  const [searchP , setSearchP] = useSearchParams();

  es una variable de estado, al ser input de buscar es especial y se usa eso


  const filtrar = searchP.get("search") ?? "" //si es distinto de null o undefined, quedate con lo primero


*/

