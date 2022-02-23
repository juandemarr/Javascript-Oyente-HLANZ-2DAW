/* 
--- CREAR PROYECTO:
--- npx create-react-app nombreProyecto
--- yarn start //para abrirlo en el navegador

--- npm install -g yarn //Instalar yarn
--- yarn set version stable //para actualizar yarn
--- Instalar extension es7 + react en vs code y react developer tools en chrome para ver los componentes

--- rafce abreviatura para escribir un componente funcional
--- en app escribimos <NombreComponente y al darle a click agrega auto el import y el nombre del componente
--- para usar el useState, hay que importar, dando al cubo morado lo autocompleta al escribir useState
en la carpeta helpers dentro de src, haremos los get de la api

.map() Para recorrer un array con .map() y dentro una funcion flecha, la cual siemre tiene que tener un return()
o cambiar las llaves de la arrow function por () , que tienen implicito el return

const filtrado = searchP.get("search") ?? "" //si es distinto de null o undefined, quedate con lo primero

--- Para indicar un nombre de clase a una clase se usa className
--- Variables dentro de {}
--- estilos dentro de {{}} ejemplo: <div style={{display:"grid" , gridTemplateColumns:"1fr 1fr"}}>
--- tipos de datos que pueden pasarse como props: string, number, boolean, arrays y objetos
--- Para usar css, importar el archivo: import "./ImagenesAleatorias.css";
--- Eventos: onClick, nombre del segundo elemento SIEMPRE con MAY

--- CSS modulares
nombre.module.css
importar en el componente:import estilos from './css/Pelicula.module.css';
y usarlos dentro como: <li className={estilos.movieCard}>

--- CREAR COMPONENTES, hay 2 formas: componente de clase y componente de funcion
//Componente de clase:
/*class Componente extends Component{
    render(){
        return (
            <h1>Mi primer componente</h1>
        )
    }
}*/

/*function Componente(){
    return (
        <h1>Componente funcional</h1>
    );
}*/

/*const Componente = (props) => (
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

--- Creamos variables arriba y las llamamos para pasarlas como parametros a los componentes
const id=1;
<TarjetaFruta nombreFruta="Fresa" id = {id}/>


------EXPORTAR
export default Componente abajo del todo o poner delante de la clase export default class etc.

Para usarlo, importarlo en otro archivo con:
import Componente from './Componentes/Componente';
si no se usa el default, poner {Componente}

VARIOS
Para exportar mas de un componente en un archivo:
export default {Componente,Componente2};


--- ESTADOS
-- FORMA ANTIGUA
El estado se declara con this.state y es un objeto
las funciones para cambiar la variable de estado se tienen que referir con this.state.variable, pero este this tiene el 
contexto de la funcion y perdio el global, por lo que hay que hacerle bindeo.
--Bindeo: se lamma la funcion dentro del constructor e iguala a si misma.bind(this)
Ejemplo: this.agregar = this.agregar.bind(this);
Luego se define abajo

En las arrow function no se pierde el contexto del this por lo que no hace falta el bindeo

--Para cambiar el estad (state) hay una funcion predefinida llamada setState que se llama con this.

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

    quitar(){
        this.state.cantidad > 0 ? 
            this.setState({ cantidad : this.state.cantidad - 1}) : 
            this.setState({ cantidad : 0});
    };

    //sin bindeo por estar usando una arrow function, esta coge el this desde lo mas alto
    limpiar = () => this.setState({cantidad : 0});

    render(){
        return(
        <>
            <div>
                <h3>{this.props.nombreFruta}</h3>
                <p>Cantidad: {this.state.cantidad}</p>
                <button onClick={this.agregar}>Agregar</button>
                <button onClick={this.quitar}>Quitar</button>
                <button onClick={this.limpiar}>Borrar</button>
                <hr/>
                <p>{this.props.precio}</p>
                
            </div>
        </>
        );
    }
}

--- DEFINIR PROPIEDADES (PROPS) POR DEFECTO
Para asignar valores por defecto en un componente, se hace debajo de dicho componente así:

TarjetaFruta.defaultProps = {
    cantidad : 5,
    precio : 3.65,
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

    quitar = () => {
        this.state.cantidad > 0 ? 
            this.setState({ cantidad : this.state.cantidad - 1}) : 
            this.setState({ cantidad : 0});
    };

    limpiar = () => this.setState({cantidad : 0});

    el render igual


--- VERSION MEGAMODERNA Y A UTILIZAR
--- Hook : useState, con componentes funcionales, en la funcion necesito el RETURN
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

    function quitar(){
        return cantidad > 0 ? setCantidad(cantidad - 1) : cantidad;
    }

    function limpiar(){
        return setCantidad(0);
    }

    return(
        <>
            <div>
                <h3>{nombreFruta}</h3>
                <p>Cantidad: {cantidad}</p>
                <button onClick={agregar}>Agregar</button>
                <button onClick={quitar}>Quitar</button>
                <button onClick={limpiar}>Borrar</button>
                <hr/>
                <p>{precio}</p>
                
            </div>
        </>
    );
}

export default TarjetaFruta;                                        

}



--- HOOK: useEffect, estados funcionales
useEffect, para que al arrancar la app se ejecute, al menos una vez
useEffect(() => {
    console.log("Se ejecuta al inicio solo una vez");
},[])

useEffect(() => {
    console.log("Se ejecuta cuando modificas el state de contador1");
},[contador1]);

useEffect(() => {
        console.log("Se ejecuta al inicio");
})

--- Formas de cmabiar el estado con el hook useState, con arrow function
const handlerContador1 = (e) => {
    //return setContador1(contador1 + 1);//esto funciona el 95%
    return setContador1((prevEstado) => prevEstado + 1);//al 100%, pasandole una arrow function
};//si abro llaves tengo que poner return, si abro parentesis no


--- PROPIEDAD CHILDREN
{children} parametro especial children, coge los componentes que se pongan dentro del componente actual, al llamarlo 
en index.js

<Datos edad={edad}>
    <Hijo/>
</Datos>

const Datos = ({edad},children) => {
  return <div>
      {edad} o si lo llamo arriba props sin los {}, aqui seria props.edad 
      {children}
  </div>;
};

///////////////////////
en los input de tipo busqueda, siempre tendran el evento onChange, el cual mediante un estado guarda la ingo en una
variable
onChange={(e) => setSearchTerm(e.target.value)}  //APIWeather
--- A la hora de obtener el json, poner interrogacion ? justo detras del elemento que no estamos seguros si existira en json, usarlo siempre
setPeliculas(data?.results); 
--- Todos los ellementos de una lista necesitan un atributo key para diferenciarse
ejemplo: <Pelicula key={peli.id}

<img 
    className={estilos.movieImg} 
    src={urlImg} 
    alt={title} 
    width={230} 
    height={345}/>

poner la latura y anchura aqui en la etiqueta para que reserve el espacio al pintar la pag


--- RUTAS react-router-dom
Instalar
----- npm install react-router-dom
ó
--- yarn add react-router-dom
el esquema de rutas se pone en la pag de entrada: index.js
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>  //se engloba para que su contenido se pinte en una parte de otra pag,
                                            // lo indicaremos con <outlet/>
            <Route index element={<Home />} />  //La principal se sustituye por index 
            <Route path="peliculas" element={<PeliculasGrid/>} >
                <Route path=":peliculaID" element={<Pelicula/>} /> //este nombre despues de : da igual, luego lo usaremos para coger ese valor
            </Route>
            <Route path="about" element={<About/>} />
            <Route path="*" element={<Navigate replace to ="/" /> } />
        </Route>
    </Routes>
</BrowserRouter>

//done este el route que englobe, en ese componente estará el outlet
donde este Outlet es donde se pintara el contenido del componente seleccionado

--- ENLACES
Se ssutituye <a> por <Link to="/">Home</Link>


USEEFFECT
Siempre que queramos cambiar algo segun un cambio de estado, ese algo lo hacemos dentro de este hook

efecto primario de REACT: pintar en el dom
efectos secundarios, hacer mas cosas como conectarse a apis, geo etc. <= useEffect
Actua como puente entre el html y react:
    extraer algo que vive en react, como sus estados, hacia afuera al html
    y obtener cambios de html y llevarlo adentro de react, puente en ambos sentidos
Se pueden definir funciones dentro, adjuntar eventos etc, bloqure completo

Ejemplo con un componente funcional:
import React, {useState,useEffect} from "react";
export default function App(){
    const [mostrar, setMostrar] = useState(true);

    return (
        <div>
            <button onClick={() => setMostrar(false)} Dejar de mostrar </button>
            {mostrar ? <MouseColor /> : null}
        </div>
    );
}
funtion MouseColor(){
    const [color,setColor] = useState("orange");

    useEffect(()=>{
        function onMouseMove(evento){
            if ( evento.clientX < window.innerWidth / 2)
                setColor("orange");
            else
                setColor("blue");
        }
        window.addEventListener("mousemove",onMouseMove); //al estar dentro de useEffect, cada vez que se ejecute se añadira el evento a la lista de los que hay
    
        return () => { //limpia el mouseEffect en caso de no ser llamado este componente
            window.removeEventListener("mousemouve",onMouseMouve);
        }
    },[])

    console.log("ocurrio el render");
    return <div style = {{height = "100vh" , backgroundColor = color}}></div>;
    
}

getEventListeners(window); //muestra todos los eventos agregados
solucion: dependencias de useEffect, array que se pasa como segundo argumento, dsp de la funcion
si esta vacio se ejecuta solo una vez, si se le pasa una variable de estado, se ejecuta cada vez que ese estado
cambie


Si no tiene al final [] el useEffect y se ejecuta cada vez que cambia el estado, esta funcion de return 
se va a ejecutar PRIMERO, es decir primero limpia y luuego ejecuta lo que tenga useEffect


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
USESEARCHPARAMS() hook para mandar variables a la url, un useState especial, se utilzia de la misma forma.
    Para usar las queryParams o parametros de busqueda que aparecen en las url (search=)
USE PARAMS() hook para recoger variables de la url

--- useSearchParams()
import {useSearchParams } from 'react-router-dom';

//dentro del componente:
const [searchP , setSearchP] = useSearchParams(); //probar a poner dentro ({})

const handleFiltrar = (e) => {     //evento declarado en el onChange del input type text del formulario
    setSearchP({search : e.target.value})
}

//Paso previo para poner lo que has escrito como valor en tu input
    ^
const filtrado = searchP.get("search") ?? "" //si es distinto de null o undefined, quedate con lo que tiene, 
    sino pon vacio

return(
    <input
        type="text"
        placeholder="Buscar pelicula"
        value={filtrado}//nunca puede ser null, ni al principio cuando esta pintando el componente
        //necesario para que permanezca la palabra en el input al igual que en la url, aun refrescando
        onChange={handleFiltrar}
      />

      <ul> //cojo mi pelicula del array, y devuelvo las que incluya en alguna parte lo que haya escrito en el input
           //con .includes()

        {datos.results.filter( (pelicula) => {
          const nombrePelicula = pelicula.title.toLocaleLowerCase();
          return nombrePelicula.includes(filtrado.toLocaleLowerCase()) 
        
        ).map((pelicula) => {
          return (
            <li key={pelicula.id}>
              <Link to={pelicula.id.toString()}>{pelicula.title}</Link>   //todo loq ue envie por la url tiene que ser string
            </li>
          )
        })}
      </ul>
)


--- useParams()

import { useParams } from 'react-router-dom';

//en el componente
const params = useParams();//params es un objeto, con una clave que se llama con el nombre de la variable que pusimos en route /:
    
function getPeliculaID(){
    return datos.results.find( (pelicula) => pelicula.id === parseInt(params.peliculaID) );
    //el id es numero, la url es string, con 3 iguales nunca seria igual, por lo que convertimos el texto en entero, 
    //o viceversa
}
const peliculaBuscada = getPeliculaID();

    return (
        <div>
            <h2>{peliculaBuscada.title}</h2>

--------------
En index.js , dentro de <BrowserRouter>
<Route path="peliculas" element={<PeliculasGrid/>} >
    <Route path=":peliculaID" element={<Pelicula/>} /> //este nombre despues de : da igual, luego lo usaremos para coger ese valor
</Route>

</BrowserRouter>
--------------
//////////////////////////////////////
USENAVIGATE hook para volver a otras rutas

import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

function handleVolver(){
    navigate("/peliculas");
}

///////////////////////////////////////

solo se puede usar aync await en funciones que sean asincornas, que en la red devuelvan los datos en pequeños trozos separados de datos

--- CONSULTA API
creamos en una constante una funcion flecha, con async await, dentro de su try catch. 
PRIMER AWAIT EN fetch(url) y segundo AWAIT en .json()
Este archivo lo podemos poner dentro de una carpeta helpers

const getPeliculas = async () => {
    try {   
        const url = "https://api.themoviedb.org/4/discover/movie?api_key=7d968d2bb2398a4fbd9cd07cb679b846&language=es";
        const resp = await fetch(url);
    
        const data = await resp.json();
        console.log(data);//siempre hay que comprobar antes que tipo de datos devuelve para escribirlo dsp, en este caso array de objetos, en el useState pondremos[]
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default getPeliculas;

//Este data que se devuelve, al venir de un .json() es una promesa, y se consume con .then() en donde se llame

/////////////////////////////////////

FORM

--- npm install react-hook-form

ver ejemplo react-hook-form-app. Con este hook, el usar los 3 puntos o esa forma de definir las variables es eimpre asi, como esta definido este hook
//dentro del componente:
const [entradas, setEntradas] = useState([]);
const {register,handleSubmit, formState:{errors}} = useForm();
    //en register se guardan os datos y los errores asociados

const onSubmit = (data,e) => { //dos parametros, la data (todos los datos del form) y el evento
    e.target.reset();//limpia el form

    setEntradas([...entradas,data]); //guardo en entradas lo que ya tiene, más data
    //esto se hace en diferido 
} 

return(
<form onSubmit={handleSubmit(onSubmit)} className="mb-5">
<input 
    type="password"
    placeholder="Password"
    className="form-control mb-2"
    name="password"
    {
        ...register("password",{
        required:{value:true , message : "Contraseña requerido"},
        minLength:{value : 4 , message : "Longitud insuficiente"}
    })  
    }    
/>


/////////////////////////////////////

PASAR VARIABLES DE UN COMPONENTE A OTRO

<TarjetaFruta nombreFruta="Fresa" precio="2,45"/>
Para pasar variables de un componente a otro, se nombran en los atributos de ese componente con el mismo nombre de su variable a pasar
creo que no tiene porque ser asi
<Componente2
    global={global.nombre}
    setGlobal={setGlobal} 
    handleEliminar={handleEliminar}
/>
ó
<APIWeatherInfo {...tempInfo}/>
con spread porque tempInfo es un objeto y de esta forma se pasan los valores que tiene dentro, sin llamar
al objeto en el otro componente, sino con destructuring de sus propiedades.
al ser spread, NO puede llevar tempInfo = {...tempInfo}


///////////////////////////////////////////

COMO PINTAR ELEMENTOS DE UN BUCLE DENTRO DE UN RETURN DEL COMPONENTE
<div>
        {arrayCiudades.map( e => (
            <p key={e.name}>{e.name} : {e.min.temp}</p>
        ))}
    </div>

////////////////////////////////////

FIREBASE

--- npm install firebase

carpeta components, carpeta helpers, fichero firebase-config.js
añadir export const db = getFirestore(app); //esto sirve para no tener que importarlo en cada componente
import {getFirestore} from "firebase/firestore";


todo lo que sea traer datos de la bd o hacer cosas con la bd tiene que ser asincrono, async await
todos los await por convencion se ponen dentro de try catch

el evento de onClick si necesita parametro, no se declara fuera, sino ahí con un arrow function para poner ese parametro
onClick={(e) => handleEliminar(libro.id)}

//////////////////////////////////////////////

//PROMESAS CON ASYNC AWAIT

async function apiFetch(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let json = await response.json();
        console.log(json); 
    }catch(error){
        console.log(error);
    }
}
apiFetch();

//si lo llamas desde dentro de la funcion async, la promesa queda resuelta con await.
        //Pero si hace un return y se quiere trabajar con esos datos FUERA de la funcion, al ser async devolvera una 
        //promesa la cual hay que consumir con await

///////////////////////////////////////////////

*****cuando los componentes no son padres ni hijos para pasar datos, creamos un estado global en app y lo pasamos a ambos
*****con parentesis en arrow function ahorra poner el return
****<APIWeatherInfo {...tempInfo}/> este tempInfo es una variable de esatdo la cual tiene un objeto con datos como temperatura, humedad etc.
        con spread para coger todos los valores de adentro y obtenerlos en el otro componente con destructuring
****.get("indice") coger el valor de un objeto dado ese indice
**** .filter() devuelve un array con las coincidencias, mientras qye .find() devuelve la primera coincidencia


//EJ 4 relacion 2 REACT, api pokemon
al conectrase a api, en el useEffect [] llamar a una funcion que cargue todos los datos de la api
con un find sobre ese array, buscando por el nombre, encuentra el pokemon, y su url, 
luego hacer otra fetch a esa url
gestionarlo con el onSubmit del form, no el click del boton

