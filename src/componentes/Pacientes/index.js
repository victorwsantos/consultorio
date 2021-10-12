import React from "react";

import { Link } from "react-router-dom";
import Header from "../Header";

export default function Pacientes(){
    return(
        <div className='lista-pacientes'>
            <Header/>
            <div className='tabela-pacientes'>
                <table>
                    <thead>
                    <h1>Pacientes</h1>
                    </thead>
                    <tbody>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Idade</th>
                        <th>Telefone</th>
                    </tbody>
                </table>
            </div>
        </div>
    )
}