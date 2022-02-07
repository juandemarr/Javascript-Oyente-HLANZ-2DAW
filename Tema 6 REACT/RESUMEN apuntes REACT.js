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


--- ENLACES
Se ssutituye <a> por <Link to="/">Home</Link>


--- HOOK usePArams() para recoger variables de la url //ver en api-movie
--- HOOK useSearchParams() especial de useParams para los input type search //ver en api-movie
--- HOOK useNavigate() para volver a otra ruta //ver en apuntes

