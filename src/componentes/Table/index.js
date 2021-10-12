import React from "react";

export default function Table(props){
    return(
        <div className='component-table'>
                <table>
                <div className='linha-tabela-prop'>
                    <div><td>{props.nome}</td></div>
                    <div><td>{props.email}</td></div>
                    <div><td>{props.idade}</td></div>
                    <div><td>{props.telefone}</td></div>
                </div>
                </table>
            
        </div>
    )
}