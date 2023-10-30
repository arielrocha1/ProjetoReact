import React,{useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

export default function IndiretaPai(props) {
    
    const [nome, setNome] = useState("?")
    const [idade, setIdade] = useState(0)
    const [trabalho, setTrabalho] = useState(false)
    
    function fornecerInfo(nome,idade,trabalho){
        setNome(nome)
        setIdade(idade)
        setTrabalho(trabalho)
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{trabalho ? "sim":"não"}</span>
            </div>
            <IndiretaFilho SetInfo={fornecerInfo}></IndiretaFilho>
        </div>
    )
}