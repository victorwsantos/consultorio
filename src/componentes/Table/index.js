import React from "react";
import { Link } from "react-router-dom";


export default function Table(props){
    
    const clickToDelet = (e)=>{
        const divDelet = document.getElementById('modal-delete');
        e.preventDefault()
        divDelet.style.display=('block')
    }
    const clickToEdit = (e)=>{
        const divEdit = document.getElementById('modal-editar');
        divEdit.style.display=('block')
    }
    const clickToClose = (e)=>{
        const divDelet = document.getElementById('modal-delete');
        const divedit = document.getElementById('modal-editar');
        e.preventDefault()
        divDelet.style.display=('none')
        divedit.style.display=('none')
    }

    return(
        <div className='component-table'>
                <table>
                <div className='linha-tabela-prop'>
                    <div><td>{props.nome}</td></div>
                    <div><td>{props.email}</td></div>
                    <div><td>{props.idade}</td></div>
                    <div><td>{props.telefone}</td></div>
                    <button onClick={()=>clickToDelet()} className='delete-button'>Delete</button>
                    <button onClick={()=>clickToEdit()} className='edit-button'>Edit</button>
                    
                <div id='modal-editar'>
                <div className='model-container' >
                    <h1>Editar</h1>
                        <input type='text' name='nome' defaultValue={props.nome}/>
                        <input type='text' name='Email' defaultValue={props.email} />
                        <input type='text' name='Idade' defaultValue={props.idade}/>
                        <input type='text' name='Telefone' defaultValue={props.telefone}/>
                    <button onClick={clickToClose}>Cancelar</button>
                    <button>Atualizar</button>
                </div>
            </div>
                </div>
                </table>
            
        </div>
    )
}