import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormularioProduto = ({ adicionarProduto }) => {
  const [produto, setProduto] = useState({ nome: '', preco: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarProduto(produto);
    setProduto({ nome: '', preco: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome do Produto"
        value={produto.nome}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="preco"
        placeholder="Preço"
        value={produto.preco}
        onChange={handleChange}
        required
      />
      <button type="submit">Adicionar Produto</button>
    </form>
  );
};

FormularioProduto.propTypes = {
  adicionarProduto: PropTypes.func.isRequired,
};

export default FormularioProduto;
