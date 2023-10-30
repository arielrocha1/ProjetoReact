import React from "react";
import alunos from "../../data/Aluno"

export default function ListaAluno(props) {

    const lis = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id} - {aluno.nome}---{aluno.nota}
            </li>
        );    
    });


    return (
        <div>
            <ul style={{listStyle:"none"}}>
                {lis}
            </ul>
        </div>
    )
}