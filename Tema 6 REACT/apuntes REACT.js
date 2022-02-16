/*libreria, no framework (conjunto de paquetes ya juntados y listos para usar)
crea un dom virtual (fragment) y luego lo añade
Cada elmento es un componente con html, css y js
Minima expresion de codigo - kernel o nucleo (react)
modulos aparte para pintar en la pag web, rutas, testing, form etc. Se cargan solo los modulos necesarios
 (react y render para pintar pag web)
archivo manifiest que indica los modulos cargados etc.
al instalar modulos se añaden solos a package.json
los principales son react y react-dom

librerias mas tochas para pasar estados: redux (dificil), useRedux

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

export default ImagenesAleatorias;


.map(valor, indice) para recorrer array

El render (return) lo unico obligatorio en cada ocmponente


babeljs.io en try out, marcar todos los settings menos time travel, y activar abajo react
Se escribe a la izq html y a la derecha como lo hace react
babel traduce jsx

----------------------
Para poner js dentro de jsx, indicar le nombre de la variable entre {}
Para indicar un estilo, escribimos el valor entre {{}} : <div style={{display:"grid" , gridTemplateColumns:"1fr 1fr"}}>

Estas var se pasan como props en los argumentos del componente funcional, y se meten al llamar al componente en app.js
este props es un objeto, por eso se llama con props.nombre (como se vio en babel try out)

DATOS QUE SE PUEDEN PASAR A LAS PROPS al llamar al compnente
string, {var creada arriba}, numeros {2.85}, array, objeto, boolean

Para listas hay que indicarle a cada elemento un key como atributo de la etiqueta


------EXPORTAR
export default Componente abajo del todo o poner delante de la clase export default class etc.

Para usarlo, importarlo en otro archivo con:
import Componente from './Componentes/Componente';
si no se usa el default, poner {Componente}

VARIOS
Para exportar mas de un componente en un archivo:
export default {Componente,Componente2};

Para importarlo, luego de crear la variable, acceder a cada uno como <nombreVariable.Componente/>
import grupoComponentes from './Componentes/Componente';

COMENTAR
{/*  */}

/*Los componentes tienen 3 esatdos, cuando se crean, modifican y eliminan

----EVENTOS
Eventos sinteticos, se traducen a eventos del DOM que no usa
En sintaxis camelCase
por estandar se usa handle lo que sea para definir la funcion del evento

----CONTEXTO THIS
//estas llaves crean un contexto, por lo que el this.state no funciona ya que ese this se refiere 
//al contexto de la funcion, no al de arriba del constructor

-----BINDEO
o binding sobre los metodos que el this pierde el contexto de clase, en los componetes de clase y funcionales no arrow
en las arrow function no hace falta ya que coge el this desde arriba

//las funciones en los componentes de clase siempre hay que definirlas en el constructor con this.
//por eso hay que hacerle el bindeo o asociacion con this.

import React , {Component} from "react";

class TarjetaFruta extends Component{
    constructor(props){
        super(props);
        this.state = {
            cantidad : 0,
        };

        this.agregar = this.agregar.bind(this); 
        this.quitar = this.quitar.bind(this);
    }

    agregar(){
        this.setState({ cantidad : this.state.cantidad + 1});
    };
}

render(){
    return(
        <button onClick={this.agregar}>Agregar</button>
    )
}

--- FORMA MODERNA
//Property Initalizers != HOOK
//Quito el constructor, el super y el this
//no hay bindeo (ya que se usa siempre arrow functions)

class TarjetaFruta extends Component{
    state = {
        cantidad : 0,
    };

    agregar = () => {
        this.setState({cantidad : this.state.cantidad + 1});
    }
}
return(
    <button onClick={this.agregar}>Agregar</button>
)

--- VERSION MEGAMODERNA Y A UTILIZAR
--- Hook : useState, con componentes funcionales
Hay que importar el hook: import React, {useState} from "react";
La variable la llamo llamando a su funcion set
Al llamar a la funcion ya no se hace con this.funcion, ya que no es un componente de clase, sino funcional
Solo se usa el nombre de la funcion de forma asincrona (sin parentesis)

const TarjetaFruta = ({nombreFruta , precio = 3.5}) => { //destructuring de props, ventaja, usar valores por defecto
    const [cantidad, setCantidad] = useState(0); //nombreVariable, setNombreVariable y entre parentesis del useState 
                                                //el valor inicial, si va aser un array useState([])
                                                //objeto useState({})
    function agregar(){ // o arrow function const agregar = () => {}
        return setCantidad(cantidad+1);
    }
}
return(
    <button onClick={agregar}>Agregar</button>
)


//////
--- Formas de cmabiar el estado con el hook useState, con arrow function
const handlerContador1 = (e) => {
    //return setContador1(contador1 + 1);//esto funciona el 95%
    return setContador1((prevEstado) => prevEstado + 1);//al 100%, pasandole una arrow function
};//si abro llaves tengo que poner return, si abro parentesis no
/////



----//con arrow function para el esatdo
    //cogemos el valor del estado que repinta la vista al cambiar, en este caso cantidad, y al lado setMismonombre, esta 
    //es una funcion
    const [cantidad, setCantidad] = useState(0); //en useState se pone el valor inicial de cantidad, si fuese un objeto 
    //seria {}, como es un numero ponemos 0

    import React, {useState} from "react"; //este useState se llama HOOK

------ATRIBUTOS DE CLASES
para añadir mas de una clase, si la cogemos convariable, tenemos que definir esa var arriba e irle concatenando las clases
className={classNameImg}


debugger; //frena la ejecucion, es como un breakpoint


--- OTRO HOOK, useEffect
Siempre que queramos cambiar algo segun un cambio de estado, ese algo lo hacemos dentro de este hook
efecto primario de REACT: pintar en el dom
efectos secundarios, hacer mas cosas como conectarse a apis, geo etc. 
Actua como puente entre el html y react:
    extraer algo que vive en react, como sus estados, hacia afuera al html
    y viceversa

siempore recibe copmo argumento una funcion, arrow o anonima
Se ejecuta cada vez que el componente hace render,y eso es cada vez que el estado cambie
despues de pintar en el dom se ejecuta

useEffect, para que se ejecute siempre, incluso al arrancar la app
useEffect(() => {
    console.log("Se ejecuta al inicio solo una vez");
},[])

useEffect(() => {
    console.log("Se ejecuta cuando modificas el state de contador1");
},[contador1]);

useEffect(() => {
        console.log("Se ejecuta al inicio");
})



--- propiedad children, junto a props son las dos formas de pasar variables del padre al hijo

<Datos edad={edad}>
    <Hijo/> //esto que hay aqui dentro es children
</Datos> /* aqui se consume */
/*
import React from 'react';

const Datos = ({edad},children) => {//pasandolo por destructuring
  return <div>
      {edad} o si lo llamo arriba props sin {}, aqui seria props.edad 
      {children} parametro especial children, coge lo que se pone dentro del componente
  </div>;
};


////////Pasar estados como argumentos a otros componentes, esto pasa variables del hijo al padre
const [dato, setDato] = useState();

return (
    <Componente1 dato={dato} setDato={setDato}/> //si solo se va a modificar, se pasaria solo setDato, a no se que la modificacion sea setDato(!dato)
    <input type="text" onClick = {(e) => setDato(e.target.value)}
)
//en el otro componente
function Componente1({dato,setDato}){//pasandole un estado por argumento con su set
    setDato('pepe');
}



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
en el navegador, inspector, network, 

////////
Al componete de la pelicula, donde colocamos la imagen, mejor ponerle el width aqui para que reserve el espacio

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

el replace to se usa en useNavigate, y el history esta tbn en useNavigate
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />} />    //entre llaves se pone a donde quiero ir, nombre del componente
        <Route path="/pelicuals" element={<PeliculasGrid/>} />
        <Route path="*" element={<Navigate replace to ="/" /> } />    // * => todo lo que no sea lo anterior lo envia a / con navigate replace to
                                //replace to tbn borra el historial previo
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
        <Route index element={<Home />} />     // La principal se sustituye por index 
        <Route path="peliculas" element={<PeliculasGrid/>} />
        <Route path="about" element={<About/>} />
        <Route path="*" element={<Navigate replace to ="/" /> } />
    </Route>
      
  </Routes>
</BrowserRouter>
,
document.getElementById('root')
);

//done este el route que englobe, en ese componente estará el outlet


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
luego lo usaremos en params.peliculaID en pelicula

en el componente PeliculasGrid
<Link to={pelicula.id.toString()}><li></li></Link> hay que convertir la ruta a texto, por si el id es un numero la ruta no lo acepta

este numero que envio a la ruta, se recoge con esto en el componente de esa ruta con:
const parms = useParams();
params.peliculaID al ser la url, es string


//PARA VOLVER A OTRA RUTA; NECESARIO OTRO HOOK useNavigate(), sustituye a useHistory de versines anteriores
const navigate = useNavigate();

    function handleVolver(){
        navigate("/peliculas");
    }
y esta funcion la llamo en onClick

navigate(-1) //vuelve uno a tras en el historial


//BUSCADOR
HOOK useSearchParams()
al ser input de buscar es especial y se usa eso para que añada el search o query de busqueda de las urls profesionales

https://www.google.es/search?q=gato //este search?q es una query, lo simularemos con useSearchParams()
//Para realizar busquedas en formularios usaremos las queryParams o llamados parámetros de búsqueda
//para ello necesitamos el Hook useSearchParams, equivalente al useState

  const [searchP , setSearchP] = useSearchParams();  //es una variable de estado, 
    con useState accediamos a la variable llamandola sin mas, aquí esta variable es un objeto con muchos datos
    accedemos con .get()

  const handleFiltrar = (e) => {
    setSearchP({search : e.target.value}) //en searchP este hook guarda UN OBJETO con el indice search
  }

  const filtrado = searchP.get("search") ?? "" //si es distinto de null o undefined, quedate con lo primero
    
    el objeto creado por useSearchParam es especial y se accede a sus valores con .get()

    <input
        type="text"
        placeholder="Buscar pelicula"
        value={filtrado}//nunca puede ser null, ni al principio cuando esta pintando el componente
        onChange={handleFiltrar}
      />
      siempre usaremos el evento onChange, para que sea al pulsar intro ya se usaria la funcionalidad del form, haciendo 
      el preventDefault para que no recargue


--- FORM
--- npm install react-hook-form



EJ:
en app poner 
function App(){
    return(
        <div className = "container">
            <h2>Formularios con React Hook Form</h2>
            <FormLogin /> //crear componete con hello there
        </div>
    )
}

function FormLogin(){
    handleSubmit(){

    }
    return(
        <div className="container my-5">
            <h2 className="mb-3">Iniciar sesion</h2>
            <form onSubmit={handleSubmit} className="mb-5">
                <input 
                    placeholder="Ingrese nombre de usuario"
                    className="form-control mb-2"
                    name="username"    
                />
                <input 
                    placeholder="email"
                    className="form-control mb-2"
                    name="email"    
                />
                <input 
                    placeholder="password"
                    className="form-control mb-2"
                    name="password"    
                />

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}


escribir useStateSnippet


--- npm install firebase

en firebase, creat project crud-react, y luego authentication
quitar google analytics
agregar proveedor nuevo, con email con contraseña, agregar google, nombre crud-react-app
firestore-database, modo prueba, 
crear coleccion tareas, campo email string y arriba id automatico
arriba en la ruedad de ajustes, configuracion del proyecto, crear una aplicacion en el apartado de apps,
 en el icono de web. nombre app-crud-react, no marcar el hosting


Para registrarse con firebase, poner contraseña de  minimo 6 caracteres

se puede traer los adtos como un snapshot, cada vez que se modifique la bd, se mostrara aqui, o traerlos directamente
 y para consultar cambios pedir los datos otra vez


/////////////////////////////////////////

**********Si quieres cambiar cualquier propiedad de un elemento del dom segun un estado, hacerle esta asignacion en el useEffect,
como asignarle el style de opacity
En componentes de clase, donde no existen los hooks, el equivalente a useEffect es:
    componentDidMount() {
        document.getElementById("imgClase").style.opacity = this.state.opacity;
        console.log("diMount " + this.state.opacity);
    }
    componentDidUpdate() {
        document.getElementById("imgClase").style.opacity = this.state.opacity;
        console.log("diUpdate " + this.state.opacity);
    }
////////////////////////////////////////


solo se puede usar aync await en funciones que sean asincornas, que en la red devuelvan los datos en pequeños trozos separados de datos
*/

