import React, {Component} from "react";
import { render } from "react-dom";

// Hay dos formas de crear un componente, componente de clase y componente de funcion
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
);*/
/*de tener mas de una linea, se pondria entre parentesis despues de => */

//lo de arriba ahora en componente de clase
class Componente extends Component{
    constructor(props){
        super(props);
        this.nombre = props.nombre;
        this.meses = props.meses;
        this.datos = props.datos;
    }
    render(){
        return(
        <>
            <h1>Mi primer componente {this.nombre}</h1>
            <ol>
                {this.meses.map((mes,index) => (
                    <li key={index}>{mes}</li>
                ))}
            </ol>
        </>
        );
    }
    //en lugar de usar constructor y super se puede poner {this.props.nombre}, aunque mas adelante hace falta el constructor
    //por defecto el constructor lleva el argumento props aunque no se indique
}

class Componente2 extends Component{
    render(){
        return (
            <h3>Mi segundo componente exportado</h3>
        )
    }
}

export default {Componente,Componente2};
