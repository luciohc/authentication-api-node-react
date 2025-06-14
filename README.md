
# Authentication API - Node.js + React + JWT + PostgreSQL

Este é um projeto de API de Autenticação e Autorização com backend em **Node.js (Express)**, **JWT**, **PostgreSQL** e frontend com **React**, **jQuery**, **Ajax** e **Bootstrap**.

---

## 📌 Tecnologias utilizadas

- **Backend:** Node.js + Express + JWT + PostgreSQL + Bcrypt
- **Frontend:** React + jQuery + Bootstrap + Ajax
- **Banco de Dados:** PostgreSQL

---

## 📍 Estrutura do Projeto

```
authentication-api/
├── backend/
└── frontend/
```

---

## ✅ Como rodar o projeto

### 1. Configurar o Banco de Dados (PostgreSQL)

- Crie um banco de dados chamado: `auth_api`

### Script para criar a tabela de usuários:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password VARCHAR(200) NOT NULL,
  role VARCHAR(50) DEFAULT 'user'
);
```

---

### 2. Rodar o Backend

```bash
cd backend
npm install
node app.js
```

> O backend ficará disponível em: **http://localhost:5000**

---

### 3. Rodar o Frontend

```bash
cd frontend
npm install
npm start
```

> O frontend abrirá em: **http://localhost:3000**

---

## ✅ Fluxo de Uso

| Ação | Método | Rota |
|---|---|---|
| Registrar usuário | POST | `/api/auth/register` |
| Login | POST | `/api/auth/login` |
| Acesso protegido | GET | `/api/auth/protected` |

---

## ✅ Funcionalidades já implementadas

- Registro de usuários com senha criptografada
- Login com geração de JWT
- Validação de token com middleware `verifyToken`
- Frontend com formulários de Login, Registro e Teste de Rota Protegida

---

## ✅ Próximos passos sugeridos

- Criar Logout
- Implementar Refresh Token
- Proteger rotas no React usando React Router
- Adicionar OAuth2 com Google

---

Desenvolvido por Lúcio Costa 🚀
