import './index.css'
import ReactDOM from "react-dom"
import React from "react"

import FuncStatic from './components/basics/FuncStatic'
import ComParametro from './components/basics/ComParametro'


ReactDOM.render(
    <div id="app">
        <FuncStatic></FuncStatic>
        
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