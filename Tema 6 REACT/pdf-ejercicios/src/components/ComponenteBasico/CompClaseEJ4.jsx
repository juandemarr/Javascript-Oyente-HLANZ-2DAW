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
                <h3>Componente de clase</h3>
                <h4>{this.state.myText}</h4>
                <button onClick={this.handleCambiarEstado}>Change text</button>
            </>
        )
    }
}