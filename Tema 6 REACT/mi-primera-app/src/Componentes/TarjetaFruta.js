//import React , {Component} from "react";
import React, {useState} from "react"; //este useState se llama HOOK
//VERSION ANTIGUA
/*
//Para asignar valores por defecto en un componente clase. Tbn sirve para las funciones
TarjetaFruta.defaultProps = {
    cantidad : 5,
    precio : 3.65,
}

class TarjetaFruta extends Component{
    constructor(props){
        super(props);
        this.state = {
            cantidad : 0,
        };

        this.agregar = this.agregar.bind(this);//bindeo por cada metodo que pierde el contexto de this
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
                <button onclick={this.agregar}>Agregar</button>
                <button onclick={this.quitar}>Quitar</button>
                <button onclick={this.limpiar}>Borrar</button>
                <hr/>
                <p>{this.props.precio}</p>
                
            </div>
        </>
        );
    }
}
*/

//VERSION MODERNA
//Property Initalizers != HOOK
//no necesita crear constructor
//no hace falta this.State, solo state
//gracias a importar con create-react-app BABEL
//y lo configura con unas caracteristicas aceptadas por la comunidad pero no son un estandar de programacion
//no hay bindeo (ya que se usa siempre arrow functions)

/*
class TarjetaFruta extends Component{
    //no hay constructor
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
*/

//VERSION MEGMAODERNA. USO DE HOOKS (componente funcional)
/*con funcion declarativa
function TarjetaFruta(props){

}
*/
//con arrow function
const TarjetaFruta = ({nombreFruta , precio = 3.5}) => {//destructuring de props, ventaja, usar valores por defecto
    //como asignamos estado en un componente funcional
    //cogemos el valor del estado que repinta la vista al cambiar, en este caso cantidad, y al lado setMismonombre, esta 
    //es una funcion
    const [cantidad, setCantidad] = useState(0); //en useState se pone el valor inicial de cantidad, si fuese un objeto 
    //seria {}, como es un numero ponemos 0

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