import React from "react";
import "./Card.css"

export default function Card(props) {
    
    const estilo = {
        backgroundColor: props.color || "#F00",
        borderColor: props.color || "#F00",
    }
    
    return (
        <div className="Card" style={estilo}>
            <div className="Titulo">{props.titulo}</div>
            <div className="Conteudo">{props.children}</div>
            
        </div>
    )
}