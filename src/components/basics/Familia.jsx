import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default function Familia(props){
    return(
        <div>
            <FamiliaMembro nome = "Fulano1" sobrenome = {props.sobrenome}/>
            <FamiliaMembro nome = "Fulano2" {...props}/>
            <FamiliaMembro nome = "Fulano3" sobrenome = "Brito"/>
        </div>
    )
}