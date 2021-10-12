import Axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Header";

export default function Pacientes(){
    
    const [lista, setLista] = useState();

    console.log(lista)

    useEffect(()=>{
        Axios.get("http://localhost:3001/getlist").then((response)=>{
            setLista(response.data);
        });
    },[]);
        
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