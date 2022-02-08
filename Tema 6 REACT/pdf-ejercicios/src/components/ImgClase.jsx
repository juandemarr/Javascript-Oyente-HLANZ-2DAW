import { Component } from "react";
import {render} from 'react-dom';

class ImgClase extends Component{
    constructor(props){
        super(props);
        this.state = {
            opacity : 1
        }
        this.handleOpacity = this.handleOpacity.bind(this);
        this.handleOpacityReverse = this.handleOpacityReverse.bind(this);

    }
    handleOpacity(){
        this.setState({opacity : 0.5})
        document.getElementById("imgClase").style.opacity = this.state.opacity;
        console.log("onMouseEnter");
    }
    handleOpacityReverse(){
        this.setState({opacity : 1})
        document.getElementById("imgClase").style.opacity=this.state.opacity;
    }

    render(){
        return(
            <div>
                <img id="imgClase" src="/img/ahsoka.jpg" alt="Ahsoka" style={{width:"300px"}} 
                    onMouseEnter={this.handleOpacity}
                    onMouseLeave={this.handleOpacityReverse}
                ></img>
                <h2>Opacity: {this.state.opacity}</h2>
            </div>
        )
    }
}

export default ImgClase;