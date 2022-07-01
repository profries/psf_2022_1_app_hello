import React from 'react';

class BotaoContClass extends React.Component {
    constructor(){
        super();
        this.state = { contador: 1};        
    }
    incrementar() {
        alert("Incrementando contador...")
        this.setState({contador: this.state.contador+1});
        console.log("Contador",this.state.contador);
    }
    render() {
        return (
            <div>
                <p>Contador (Classe): {this.state.contador}</p>
                <button onClick={() => this.incrementar()}>Incrementar</button>
            </div>
        )
    }
}
export default BotaoContClass;
