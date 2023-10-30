import React from "react";

import "./App.css"

import FuncStatic from './components/basics/FuncStatic'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import RandomNumber from "./components/basics/RandomNumber";
import Card from "./components/layout/Card";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAluno from "./components/Repeticao/ListaAluno";
import ListaProduto from "./components/Repeticao/ListaProduto";

export default function App(props) {
    return (
        <div className="App">

            <h1>Fundamentos de React</h1>

            <div className="Cards" >

                <Card titulo="Desafio 7: Tabela de preço" color="#F00">
                    <ListaProduto/>
                </Card>

                <Card titulo="Desafio 6: Repetição">
                    <ListaAluno/>
                </Card >

                <Card titulo="Desafio 5: Componente com filho">
                    <Familia sobrenome="Capistrano">
                        <FamiliaMembro nome="Fulano1" />
                        <FamiliaMembro nome="Fulano2" />
                        <FamiliaMembro nome="Fulano3" />
                        <FamiliaMembro nome="Fulano4" />
                    </Familia>
                </Card>

                <Card titulo="Desafio 4: Numero aleatorio">
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