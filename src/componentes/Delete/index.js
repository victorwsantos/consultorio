import Axios from "axios";
import React, { useEffect, useState } from "react";

import Header from "../Header";
import Table from "../Table";


export default function Delete(){


    const [lista, setLista] = useState();

    useEffect(()=>{
        Axios.get("http://localhost:3001/getuser").then((response)=>{
            setLista(response)
            
        })
    })

    return(
        <div>
            <Header/>
            <div className='modal-delete'>
                
                <div className='model-container'>
                <h1>Deletar</h1>
                
                </div>

            </div>
            <div>
                {typeof lista !== "undefined" && lista.map((value)=>{
                    return(
                        <Table setTable={setLista}
                        nome={value.nome}
                        email={value.email}
                        idade={value.idade}
                        telefone={value.telefone}/>
                    )
                })}
               
            </div>
        </div>
    )

}