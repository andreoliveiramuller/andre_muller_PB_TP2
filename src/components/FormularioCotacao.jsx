import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormularioCotacao = ({ adicionarCotacao, produtos }) => {
  const [cotacao, setCotacao] = useState({ produto: '', preco: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCotacao({ ...cotacao, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarCotacao(cotacao);
    setCotacao({ produto: '', preco: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="produto" value={cotacao.produto} onChange={handleChange} required>
        <option value="">Selecione o Produto</option>
        {produtos.map((produto, index) => (
          <option key={index} value={produto.nome}>
            {produto.nome}
          </option>
        ))}
      </select>
      <input
        type="number"
        name="preco"
        placeholder="Preço"
        value={cotacao.preco}
        onChange={handleChange}
        required
      />
      <button type="submit">Adicionar Cotação</button>
    </form>
  );
};

FormularioCotacao.propTypes = {
  adicionarCotacao: PropTypes.func.isRequired,
  produtos: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      preco: PropTypes.number,
    })
  ).isRequired,
};

export default FormularioCotacao;
