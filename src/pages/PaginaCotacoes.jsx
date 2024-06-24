import React, { useState, useEffect } from 'react';
import FormularioCotacao from '../components/FormularioCotacao';
import ListaCotacoes from '../components/ListaCotacoes';
import ListaProdutos from '../components/ListaProdutos';

const PaginaCotacoes = () => {
  const [cotacoes, setCotacoes] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const cotacoesSalvas = JSON.parse(localStorage.getItem('cotacoes')) || [];
    const produtosSalvos = JSON.parse(localStorage.getItem('produtos')) || [];
    setCotacoes(cotacoesSalvas.sort((a, b) => a.preco - b.preco));
    setProdutos(produtosSalvos);
  }, []);

  const adicionarCotacao = (cotacao) => {
    const novasCotacoes = [...cotacoes, cotacao].sort((a, b) => a.preco - b.preco);
    setCotacoes(novasCotacoes);
    localStorage.setItem('cotacoes', JSON.stringify(novasCotacoes));
  };

  return (
    <div>
      <h1>Cotações</h1>
      <FormularioCotacao adicionarCotacao={adicionarCotacao} produtos={produtos} />
      <ListaCotacoes cotacoes={cotacoes} />
      <ListaProdutos produtos={produtos} />
    </div>
  );
};

export default PaginaCotacoes;
