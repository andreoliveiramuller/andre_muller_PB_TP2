# andre_muller_PB_TP2
 Segunda avaliação da disciplina Projeto de Bloco: Desenvolvimento Front-end com Frameworks [24E2_5] da faculdade de engenharia de software Instituto Infnet. No presente trabalho foi desenvolvido, em react com javascript, um sistema de compras para obter a melhor cotação de uma empresa fictícia - ACME.


## Descrição

O Sistema de avaliação de preços - ACME é uma aplicação de gerenciamento de compras desenvolvida com React.js. Esta aplicação permite que os usuários cadastrem fornecedores, produtos e cotações, e garante que as cotações sejam armazenadas de forma persistente e exibidas em ordem crescente de preço.

## Funcionalidades

- Cadastro de fornecedores
- Cadastro de produtos
- Cadastro de cotações
- Exibição de cotações ordenadas por preço
- Persistência de dados no local storage do navegador
- Layout responsivo para dispositivos móveis e desktops

## Tecnologias Utilizadas

- React.js
- JavaScript
- HTML
- CSS

## Estrutura do Projeto

css



`. 
├── public │   
├── index.html │   
└── ... ├── src │   
            ├── components │      
                ├── FormularioProduto.jsx │   │   
                ├── ListaProdutos.jsx │   │   
                ├── FormularioCotacao.jsx │   │   
                ├── ListaCotacoes.jsx │   │   
                ├── FormularioFornecedor.jsx │   
            │   └── ListaFornecedores.jsx │   
            ├── pages │   │   
                ├── PaginaInicial.jsx │   │   
                ├── PaginaFornecedores.jsx │   │   
                ├── PaginaProdutos.jsx │   
                │   └── PaginaCotacoes.jsx │   
                
├── App.jsx │   
├── index.css │   
└── main.jsx 
├── .gitignore 
├── package.json 
├── README.md └── ...`

## Instalação

1. Clone o repositório:

bash



`git clone https://github.com/seu-usuario/andre_muller_PB_TP2.git`

2. Navegue até o diretório do projeto:

bash


`cd andre_muller_PB_TP2`

3. Instale as dependências:

bash

Copiar código

`npm install`

## Uso

1. Inicie o servidor de desenvolvimento:

bash

Copiar código

`npm run dev`

2. Abra o navegador e acesse:

arduino

Copiar código

`http://localhost:3000`



## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato:

- Email: andre.muller@al.infnet.edu.br
- GitHub: [andreoliveiramuller](https://github.com/andreoliveiramuller)