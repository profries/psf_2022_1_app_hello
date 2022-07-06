import React, { useState, useEffect } from 'react';
import API from '../servicos/API';
import MeuCard from './MeuCard';

function ListaProdutos(){   
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        API.get("/produtos")
            .then((response) => setProdutos(response.data))
            .catch((err) => console.log(err))
    }, []);

    return produtos.map(produto =>
        <MeuCard key={produto.id} titulo={produto.nome}>
            <h4>R$ {produto.preco}</h4>
        </MeuCard>
    )
}

export default ListaProdutos;