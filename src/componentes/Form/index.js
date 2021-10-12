import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
export default function Form(){

    const [dados, setDados] = useState()
    
    
    const captura = (dados)=>{
        
        setDados((valorAntigo)=>({
            ...valorAntigo,
            [dados.target.name]: dados.target.value,
        }))
    }    
    const envio = ()=>{
        Axios.post("http://localhost:3001/cadastro",{
            nome: dados.nome,
            email: dados.email,
            idade: dados.idade,
            telefone: dados.telefone,
        }).then((response)=>{
            console.log(response)
            
        });console.log('Enviados')
    }


    return(
            <div className='form-cadastro'>
                <div><h1>Cadastro de pacientes</h1></div>
                <div className='div-input'><input type='text' placeholder='Digite o nome do paciente' name='nome' onChange={captura}></input></div>
                <div className='div-input'><input type='email' placeholder='Digite o email' name='email' onChange={captura}></input></div>
                <div className='div-input'><input type='number' placeholder='Digite a idade do paciente' name='idade' onChange={captura}></input></div>
                <div className='div-input'><input type='number' placeholder='Digite o numero do telefone' name='telefone' onChange={captura}></input></div>
                <div className='botoes-cadastro'>
                    <div><button onClick={envio}>Cadastrar</button><button>Limpar</button><Link to='/'><button>Voltar</button></Link></div>
                </div>
            
        </div>
    )
}