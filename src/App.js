import React from 'react';
import Hello from './componentes/Hello';
import HiMessage from './componentes/HiMessage';
import MeuCard from './componentes/MeuCard';
import ListaCards from './componentes/ListaCards'
import BotaoContClass from './componentes/BotaoContClass';
import BotaoContFuncao from './componentes/BotaoContFuncao';

function App() {
  return (
    <div>      
      <Hello nome="Fulano" idade={22}/>
      <HiMessage mensagem="Como vai?"></HiMessage>
      <MeuCard titulo="Card">
        <h4>R$ 20,00</h4>
        <h5>R$ 30,00</h5>
      </MeuCard>
      <BotaoContClass></BotaoContClass>      
      <BotaoContFuncao></BotaoContFuncao>
      <ListaCards></ListaCards>
    </div>
  );
}

export default App;
