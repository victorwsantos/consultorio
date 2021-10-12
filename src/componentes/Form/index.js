import React from "react";
import { Link } from "react-router-dom";
export default function Form(){
    return(
            <div className='form-cadastro'>
                <div><h1>Cadastro de pacientes</h1></div>
                <div className='div-input'><input type='text' placeholder='Digite o nome do paciente' name='nome'></input></div>
                <div className='div-input'><input type='email' placeholder='Digite o email' name='email'></input></div>
                <div className='div-input'><input type='number' placeholder='Digite a idade do paciente' name='idade'></input></div>
                <div className='div-input'><input type='number' placeholder='Digite o numero do telefone' name='telefone'></input></div>
                <div className='botoes-cadastro'>
                    <div><button>Cadastrar</button><button>Limpar</button><Link to='/'><button>Voltar</button></Link></div>
                </div>
            
        </div>
    )
}