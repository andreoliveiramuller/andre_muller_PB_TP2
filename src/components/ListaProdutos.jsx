import React from 'react';
import PropTypes from 'prop-types';

const ListaProdutos = ({ produtos }) => {
  return (
    <ul>
      {produtos.map((produto, index) => (
        <li key={index}>
          {produto.nome} - R${produto.preco}
        </li>
      ))}
    </ul>
  );
};

ListaProdutos.propTypes = {
  produtos: PropTypes.arrayOf(
    PropTypes.shape({
      nome: PropTypes.string.isRequired,
      preco: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ListaProdutos;
