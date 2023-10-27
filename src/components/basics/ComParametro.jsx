import React from "react"

export default function comParametro(props){
    const status = props.nota >= 6 ? "Aprovado" : "Reprovado"
    
    return(
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong> { props.aluno } </strong>
                tem nota
                <strong> { props.nota } </strong>
                e esta
                <strong> { status } </strong>
            </p>
        </div>
    )
}