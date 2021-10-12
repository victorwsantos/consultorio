import React from "react";
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <div className='header-container'>
            <div className='logo-area'>
                <h2>Sua logo aqui</h2>
            </div>
            <div className='navigation-header'>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/pacientes'><li>Pacientes</li></Link>
                    <Link to='/cadastro'> <li>Cadastro</li></Link>
                    <Link to='/agenda'><li>Agenda</li></Link>
                </ul>
            </div>
        </div>
    )
}