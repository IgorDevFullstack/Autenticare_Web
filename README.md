🩺 Online Dentist — MERN Authentication

Um sistema simples e funcional de autenticação e agendamento médico, desenvolvido com React, Node.js, Express e MongoDB, utilizando JWT para login seguro.

Este projeto implementa:

🔐 Autenticação com JWT

🗄️ MongoDB para armazenamento de usuários e dados

⚛️ Página React para login/registro

🌐 API simples para autenticar e validar tokens

📱 Interface limpa e responsiva

🚀 Tecnologias Utilizadas
💻 Front-end

React

React Hooks

Fetch / Axios

HTML5 / CSS3

Validações básicas

🛠️ Back-end

Node.js

Express.js

MongoDB + Mongoose

JWT (JSON Web Token)

Bcrypt (hash de senha)

CORS

📌 Principais Funcionalidades

Criar conta (Registro)

Login com JWT

Proteção de rotas

Logout

Verificação de usuário autenticado

Integração com MongoDB

Página React conectada à API

Estrutura MERN simples e escalável

📂 Instalação e Execução

1️⃣ Clonar o projeto

https://github.com/IgorDevFullstack/Autenticare_Web

2️⃣ Instalar dependências

Backend

cd api
npm install


Frontend
cd ..
npm install

3️⃣ Criar o arquivo .env no backend

Crie o arquivo:

/api/.env


E coloque:

MONGO_URI=sua_string_do_mongodb
JWT_SECRET=sua_chave_jwt
PORT=5000


4️⃣ Iniciar o servidor da API

cd api
npm start


5️⃣ Iniciar o front-end React

npm start

Acesse no navegador:
http://localhost:3000

🔧 Como funciona a Autenticação
✔ Registro

Usuário cria conta → senha é criptografada → salva no MongoDB.

✔ Login

Usuário envia email/senha → servidor valida → gera JWT → envia ao front-end.

✔ Rotas protegidas

Front-end envia Authorization: Bearer token → servidor valida o token → libera acesso.

🧪 Rotas da API (Exemplo)

POST - Registro
/api/auth/register

POST - Login
/api/auth/login
/api/auth/me


🤝 Contribuindo

Crie um fork

Faça suas alterações

Envie um Pull Request

Aguarde revisão

📜 Licença

Projeto livre para estudos e melhorias.




