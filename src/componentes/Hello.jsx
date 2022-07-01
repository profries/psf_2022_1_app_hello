import React from 'react';
import './Hello.css';

function Hello(props) {
    //console.log("Tipo (Idade)", typeof(props.idade));
    return (
        <div>
            {
            props.idade >=18 
            ?<h3>Ola {props.nome}! Seja bem vindo! </h3>
            :<h3>Ola {props.nome}! Nao pode entrar!</h3>                
            }
        </div>
    )
}

export default Hello;