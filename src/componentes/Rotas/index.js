import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from "../Cadastro";
import Home from "../Home";

export default function Rotas(){
    return(
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/cadastro' component={Cadastro}/>
                    
                </Switch>
            </BrowserRouter>
        </div>)
        
    
}