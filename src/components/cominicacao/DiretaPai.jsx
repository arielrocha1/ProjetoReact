import React from "react";
import DiretaFilho from "./DiretaFilho"

export default function DiretaPai(props) {
    return (
        <div>
            <DiretaFilho nome="Filho1" idade={20} trabalha={false}/>
            <DiretaFilho nome="Filho2" idade={27} trabalha={true}/>
        </div>
    )
}