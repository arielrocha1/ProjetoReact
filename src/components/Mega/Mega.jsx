import "./Mega.css"
import React,{useState} from "react";

export default function Mega(props){
    
    function gerarNumeroNaoContido(min,max,list){
        const rand = parseInt(Math.random() * ((max + 1)- min)) + min
        return list.includes(rand) ? gerarNumeroNaoContido (min,max,list) : rand
    }
    
    
    function gerarNumeros(qtde){
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1,60,nums)
            return [...nums, novoNumero]
        },[])
        .sort((n1,n2) => n1 - n2)
        return numeros
    }

    const [qtde,setQtde] = useState(props.qtde || 6)
    const numerosIniciais = Array(qtde).fill(0)
    const [numeros,setNumeros] = useState(numerosIniciais)
    
    return(
        <div className="Mega">
            <h2>Mega-Sena</h2>
            <h3>{numeros.join(" ")}</h3>
            <div>
                <label >
                    Quantidade de numeros
                    <input 
                        min={6}
                        max={15}
                        type="number"
                        value={qtde}
                        onChange={e => {
                            setQtde(+e.target.value)
                            setNumeros(gerarNumeros(+e.target.value))
                        }} />
                </label>
            </div>
            <button
                onClick={_ => setNumeros(gerarNumeros(qtde))}>
                Gerar Números
            </button>
        </div>
    )
}