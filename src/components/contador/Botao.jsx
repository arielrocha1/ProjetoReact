import React from "react";

export default function Botao(props){
    return(
        <div>
            <button onClick={props.decre}>-</button>
            <button onClick={props.incre}>+</button>
        </div>
    )
}