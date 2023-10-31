import "./Contador.css"
import React,{Component} from "react";

import Display from "./Display";
import Botao from "./Botao";
import Form from "./Form";

class Contador extends Component{
    
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 1
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (NovoPasso) => {
        this.setState({
            passo: NovoPasso
        })
    }
    
    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero = {this.state.numero}/>
                <Form passo={this.state.passo} setPasso={this.setPasso}/>
                <Botao incre={this.inc} decre={this.dec}/>
            </div>
        )
    }
}

export default Contador