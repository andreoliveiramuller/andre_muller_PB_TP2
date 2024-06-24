import React from 'react';
import PropTypes from 'prop-types';

const ListaCotacoes = ({ cotacoes }) => {
  return (
    <ul>
      {cotacoes.map((cotacao, index) => (
        <li key={index}>
          {cotacao.produto} - R${cotacao.preco}
        </li>
      ))}
    </ul>
  );
};

ListaCotacoes.propTypes = {
  cotacoes: PropTypes.arrayOf(
    PropTypes.shape({
      produto: PropTypes.string.isRequired,
      preco: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ListaCotacoes;
