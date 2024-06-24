import React, { useState, useEffect } from 'react';
import FormularioProduto from '../components/FormularioProduto';
import ListaProdutos from '../components/ListaProdutos';

const PaginaProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const produtosSalvos = JSON.parse(localStorage.getItem('produtos')) || [];
    setProdutos(produtosSalvos);
  }, []);

  const adicionarProduto = (produto) => {
    const novosProdutos = [...produtos, produto];
    setProdutos(novosProdutos);
    localStorage.setItem('produtos', JSON.stringify(novosProdutos));
  };

  return (
    <div>
      <h1>Produtos</h1>
      <FormularioProduto adicionarProduto={adicionarProduto} />
      <ListaProdutos produtos={produtos} />
    </div>
  );
};

export default PaginaProdutos;
