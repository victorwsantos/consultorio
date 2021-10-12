import Axios from "axios";
import React, { useEffect, useState } from "react";

import Header from "../Header";
import Table from "../Table";

export default function Pacientes(){
    
    const [lista, setLista] = useState();


    useEffect(()=>{
        Axios.get("http://localhost:3001/getlist").then((response)=>{
            setLista(response.data);
            console.log(response.data)
        });
    },[]);
        
    return(
        <div className='lista-pacientes'>
            <Header/>
            <div className='tabela-pacientes'>
                <h1>Lista de clientes</h1>
                <table>

                     <tr>
                        <div className='linha-tabela'>
                            <div><td>Nome</td></div>
                            <div><td>Email</td></div>
                            <div><td>Telefone</td></div>
                            <div><td>idade</td></div>
                        </div>
                    </tr>
            
                        {typeof lista !== "undefined" && lista.map((value)=>{
                        return (
                            <Table setTable={setLista}
                            nome={value.nome}
                            email={value.email}
                            idade={value.idade}
                            telefone={value.telefone}>
                            </Table>
                        )
                        })}
            </table>
            </div>
        </div>
    )
}