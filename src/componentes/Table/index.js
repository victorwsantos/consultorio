import React from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";

export default function Table(props){
    const [lista, setLista] = useState();
    function Parametro(){

        Axios.get("http://localhost:3001/getuser").then((response)=>{
            console.log(response)
        })
    }

    return(
        <div className='component-table'>
                <table>
                <div className='linha-tabela-prop'>
                    <div><td>{props.nome}</td></div>
                    <div><td>{props.email}</td></div>
                    <div><td>{props.idade}</td></div>
                    <div><td>{props.telefone}</td></div>
                    <button onClick={Parametro} className='delete-button'>Delete</button>
                    <Link to='/paciente/edit'><button className='edit-button'>Edit</button></Link>
                </div>
                
                </table>
            
        </div>
    )
}