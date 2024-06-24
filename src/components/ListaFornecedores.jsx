import React from 'react';
import PropTypes from 'prop-types';

const ListaFornecedores = ({ fornecedores }) => {
  return (
    <ul>
      {fornecedores.map((fornecedor, index) => (
        <li key={index}>
          {fornecedor.nome} - {fornecedor.contato}
        </li>
      ))}
    </ul>
  );
};

ListaFornecedores.propTypes = {
  fornecedores: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      contato: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ListaFornecedores;
