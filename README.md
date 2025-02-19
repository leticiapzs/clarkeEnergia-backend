# Clarke Energia Backend

Este é o backend da aplicação **Clarke Energia**, uma plataforma que recomenda o melhor fornecedor de energia elétrica com base no consumo informado pelo usuário. O backend é desenvolvido utilizando **Node.js** e o framework **Express** para a API, com o banco de dados **MongoDB Atlas** para armazenar informações sobre os fornecedores.

## Tecnologias Utilizadas

- **Node.js**: Plataforma JavaScript no lado do servidor.
- **Express**: Framework para criar APIs de maneira simples e rápida.
- **MongoDB Atlas**: Banco de dados NoSQL utilizado para armazenar informações dos fornecedores de energia.
- **Nodemon**: Utilizado para reiniciar automaticamente o servidor durante o desenvolvimento.

## Instalação

### Requisitos

- [Node.js](https://nodejs.org/) (você pode verificar se já tem o Node.js instalado rodando `node -v` no terminal).
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para o banco de dados.

### Passos para rodar o projeto:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/leticiapzs/clarkeEnergia-backend.git

1. **Entre no diretório do projeto:**:
   ```bash
    cd clarkeEnergia-backend


1. **Instale as dependências: Se você ainda não tiver o npm ou yarn configurado, use o comando:**:
   ```bash
   npm install


1. Configure o MongoDB Atlas: Crie uma conta no MongoDB Atlas e crie um cluster. Depois, adicione suas credenciais no arquivo de configuração para conectar à sua instância do MongoDB Atlas.
   

1. Inicie o servidor: Durante o desenvolvimento, você pode rodar o servidor com o nodemon para reiniciar automaticamente após modificações:
   ```bash
   npm run start


1. Acesse a aplicação: A API estará disponível em http://localhost:3000.

