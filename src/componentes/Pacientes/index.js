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
                        <th>Nome</th>
                        <td>E-mail</td>
                        <td>Idade</td>
                        <td>Telefone</td>
                    </thead>
                    <tbody>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}