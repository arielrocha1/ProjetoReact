import React from "react";
import If,{Else} from "./If2";

export default function UsuarioInfo2(props) {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo <strong>{usuario.nome}</strong>!
                <Else>
                    Seja bem vindo <strong>Amigo</strong>!
                </Else>
            </If>   
        </div>
    )
}