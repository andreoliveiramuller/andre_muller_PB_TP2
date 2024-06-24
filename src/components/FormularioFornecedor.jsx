import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FormularioFornecedor = ({ adicionarFornecedor }) => {
  const [fornecedor, setFornecedor] = useState({ nome: '', contato: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFornecedor({ ...fornecedor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarFornecedor(fornecedor);
    setFornecedor({ nome: '', contato: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome do Fornecedor"
        value={fornecedor.nome}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="contato"
        placeholder="Contato"
        value={fornecedor.contato}
        onChange={handleChange}
        required
      />
      <button type="submit">Adicionar Fornecedor</button>
    </form>
  );
};

FormularioFornecedor.propTypes = {
  adicionarFornecedor: PropTypes.func.isRequired,
};

export default FormularioFornecedor;
