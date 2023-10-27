import './index.css'
import ReactDOM from "react-dom"
import React from "react"

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'


ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro 
            aluno = "Ariel"
            nota = {5.9}
        />
        <ComParametro 
            aluno = "Nadine"
            nota = {9.9}
        />
    </div>,
    document.getElementById('root') 
)