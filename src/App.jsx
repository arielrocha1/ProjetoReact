import React from "react";

import "./App.css"

import FuncStatic from './components/basics/FuncStatic'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import RandomNumber from "./components/basics/RandomNumber";
import Card from "./components/layout/Card";
import Familia from "./components/basics/Familia";

export default function App(props) {
    return (
        <div className="App">

            <h1>Fundamentos de React</h1>

            <div className="Cards" >

                <Card titulo="Desafio 5: Componente com filho" color="#080">
                    <Familia sobrenome ="Capistrano"></Familia>
                </Card>

                <Card titulo="Desafio 4: Numero aleatorio" color="#080">
                    <RandomNumber min={1} max={60} />
                </Card>

                <Card titulo="Desafio 3: Fragmento">
                    <Fragmento />
                </Card>

                <Card titulo="Desafio 2: Função com parametro">
                    <ComParametro aluno="test1" nota={5.9} />
                </Card>

                <Card titulo="Desafio 1: Função estatica">
                    <FuncStatic />
                </Card>
            </div>

        
        </div>
    )
}