import React from 'react';

export class MyHelloComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {myText : "hello"};

        this.handleCambiarEstado = this.handleCambiarEstado.bind(this);
    }
    handleCambiarEstado(){
        this.setState({myText : "Juande"});
    }

    render(){
        return(
            <>
                <h2>Componete de clase</h2>
                <h3>{this.state.myText}</h3>
                <button onClick={this.handleCambiarEstado}>Change text</button>
            </>
        )
    }
}