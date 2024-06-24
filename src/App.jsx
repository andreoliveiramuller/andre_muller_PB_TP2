import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial';
import PaginaFornecedores from './pages/PaginaFornecedores';
import PaginaProdutos from './pages/PaginaProdutos';
import PaginaCotacoes from './pages/PaginaCotacoes';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Menu Inicial</Link>
            </li>
            <li>
              <Link to="/fornecedores">Fornecedores</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/cotacoes">Cotações</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<PaginaInicial />} />
          <Route path="/fornecedores" element={<PaginaFornecedores />} />
          <Route path="/produtos" element={<PaginaProdutos />} />
          <Route path="/cotacoes" element={<PaginaCotacoes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
