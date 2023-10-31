import React from "react";

import "./App.css"

import FuncStatic from './components/basics/FuncStatic'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import RandomNumber from "./components/basics/RandomNumber";
import Card from "./components/layout/Card";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAluno from "./components/repeticao/ListaAluno";
import ListaProduto from "./components/repeticao/ListaProduto";
import ParOuImpar from "./components/Condicional/ParOuImpar";
import UsuarioInfo from "./components/Condicional/UsuarioInfo";
import UsuarioInfo2 from "./components/Condicional/UsuarioInfo2";
import DiretaPai from "./components/cominicacao/DiretaPai";
import IndiretaPai from "./components/cominicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/Mega/Mega";

export default function App(props) {
    return (
        <div className="App">

            <h1>Fundamentos de React</h1>

            <div className="Cards" >

                <Card titulo="Desafio 14: Megasena" color = "#39E6D3">
                    <Mega/>
                </Card>

                <Card titulo="Desafio 13: Contador" color = "#4D57E3">
                    <Contador numeroInicial={0}/>
                </Card>

                <Card titulo="Desafio 12: Componente controlado" color = "#3978E6">
                    <Input/>
                </Card>

                <Card titulo="Desafio 11: Cominicação indireta" color = "#58E61C">
                    <IndiretaPai/>
                </Card>

                <Card titulo="Desafio 10: Cominicação direta" color = "#B9E639">
                    <DiretaPai/>
                </Card>

                <Card titulo="Desafio 9: Renderização condicional 2" color = "#E5B33C">
                    <UsuarioInfo usuario = {{nome: "Fulano1"}}/>
                    <UsuarioInfo usuario = {{Email: "Ful1@test.com"}}/>
                    <UsuarioInfo/>
                    <UsuarioInfo2 usuario = {{nome: "Fulano1"}}/>
                    <UsuarioInfo2 usuario = {{Email: "Ful1@test.com"}}/>
                    <UsuarioInfo2/>
                </Card>

                <Card titulo="Desafio 8: Renderização condicional 1" color = "#EBC0B7">
                    <ParOuImpar numero = {7}/>
                </Card>

                <Card titulo="Desafio 7: Tabela de preço" color = "#E65741">
                    <ListaProduto/>
                </Card>

                <Card titulo="Desafio 6: Repetição" color = "#E649CF">
                    <ListaAluno/>
                </Card >

                <Card titulo="Desafio 5: Componente com filho" color = "#D2EBC0">
                    <Familia sobrenome="Capistrano">
                        <FamiliaMembro nome="Fulano1" />
                        <FamiliaMembro nome="Fulano2" />
                        <FamiliaMembro nome="Fulano3" />
                        <FamiliaMembro nome="Fulano4" />
                    </Familia>
                </Card>

                <Card titulo="Desafio 4: Numero aleatorio" color = "#9BE605">
                    <RandomNumber min={1} max={60} />
                </Card>

                <Card titulo="Desafio 3: Fragmento" color = "#E6AB05">
                    <Fragmento />
                </Card>

                <Card titulo="Desafio 2: Função com parametro" color ="#E63510">
                    <ComParametro aluno="test1" nota={5.9} />
                </Card>

                <Card titulo="Desafio 1: Função estatica" color = "#E653DE">
                    <FuncStatic />
                </Card>
            </div>


        </div>
    )
}