import React from "react";

export default function IndiretaFilho(props) {
    const callback = props.SetInfo
    
    const min = 40
    const max = 70

    const gerarIdade = () => Math.floor(Math.random() * (max - min + 1) + min)

    const gerarTrabalho = () => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>
            <button onClick={function (e){
                callback("Fulano4", gerarIdade, gerarTrabalho)
            }}>Fornecer Info</button>
        </div>
    )
}