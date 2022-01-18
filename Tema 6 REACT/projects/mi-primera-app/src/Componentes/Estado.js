import React, {Component} from 'react';

//un componente se repinta si se cambia su estado
//luego en el estado se debe almacenar lo que quiero cambiar dinamicamente
//El estado en una clase se hace con this.state , se pone en el constructor y es un objeto inmutable, no se puede cambiar 
//dentro. Solo se puede modificar con un metodo especial llamado setState()

export default class Estado extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador : 0,
        }
    }
    render(){
        return(
        <>
            <h1>Componente estado</h1>
            <h2>{this.state.contador}</h2>que aumente en uno cada segundo con setInterval
        </>
        );
    }
}