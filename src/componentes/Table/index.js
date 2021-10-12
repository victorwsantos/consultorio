import React from "react";

export default function Table(props){
    return(
        <div className='component-table'>
                <tbody>
                    <td>{props.nome}</td>
                    <td>{props.email}</td>
                    <td>{props.idade}</td>
                    <td>{props.telefone}</td>
                </tbody>
            
        </div>
    )
}