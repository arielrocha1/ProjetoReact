import React from "react";

export default function ParOuImpar(props){
    
    const isPar = props.numero % 2 === 0
    
    return(
        <div>
            <div>O numero {props.numero} é: </div>
            {isPar ?
                <span>Par</span> :
                <span>Impar</span>
            }
        </div>
    )
}