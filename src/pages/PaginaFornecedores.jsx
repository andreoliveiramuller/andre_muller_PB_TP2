import React, { useState, useEffect } from 'react';
import FormularioFornecedor from '../components/FormularioFornecedor';
import ListaFornecedores from '../components/ListaFornecedores';

const PaginaFornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);

  useEffect(() => {
    const fornecedoresSalvos = JSON.parse(localStorage.getItem('fornecedores')) || [];
    setFornecedores(fornecedoresSalvos);
  }, []);

  const adicionarFornecedor = (fornecedor) => {
    const novosFornecedores = [...fornecedores, fornecedor];
    setFornecedores(novosFornecedores);
    localStorage.setItem('fornecedores', JSON.stringify(novosFornecedores));
  };

  return (
    <div>
      <h1>Fornecedores</h1>
      <FormularioFornecedor adicionarFornecedor={adicionarFornecedor} />
      <ListaFornecedores fornecedores={fornecedores} />
    </div>
  );
};

export default PaginaFornecedores;
