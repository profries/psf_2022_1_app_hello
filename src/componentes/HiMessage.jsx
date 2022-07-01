import React from 'react'

export default class HiMessage extends React.Component {    
    render() {
        return (
        <h2> 
            Oi pessoal! {this.props.mensagem} 
        </h2>
        )
    }
}

