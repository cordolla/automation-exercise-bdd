# 🤖 Automação de Testes E2E & API com Cypress + BDD

![Cypress](https://img.shields.io/badge/Cypress-13.x-brightgreen) ![BDD](https://img.shields.io/badge/Style-BDD%20%2F%20Gherkin-orange) ![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue) ![Mock Mode](https://img.shields.io/badge/Architecture-Hybrid%20(Real%20%2B%20Mock)-blueviolet)

Bem-vindo ao repositório de automação do **Automation Exercise**. 

Este projeto vai além da automação de interface padrão, implementando uma **arquitetura híbrida** que cobre tanto testes E2E (End-to-End) com BDD quanto testes de contrato de API, com suporte a **Mocking dinâmico** e integração contínua.

---

## 🚀 Destaques Técnicos

O diferencial deste projeto está na engenharia por trás dos testes:

* **BDD (Behavior Driven Development):** Escrita de cenários em Gherkin (`.feature`) para facilitar a comunicação com stakeholders.
* **Arquitetura Híbrida (Switchable Mocks):** Implementação de um [comando customizado `requestOrMock`](cypress/support/commands.js) que permite rodar os testes de API contra o servidor real ou contra [Mocks](cypress/mocks/mocks.js) instantaneamente via variável de ambiente.
* **Fábrica de Dados:** Geração dinâmica de massa de dados com `userFactory.js` para garantir testes independentes e robustos.
* **Pipeline CI/CD:** Workflow configurado no GitHub Actions para execução automática e armazenamento de evidências (vídeos/screenshots) em caso de falha.

---

## 🛠️ Tecnologias Utilizadas

* **Core:** [Cypress](https://www.cypress.io/)
* **Linguagem:** JavaScript / Node.js
* **Preprocessor:** `cypress-cucumber-preprocessor`
* **CI/CD:** GitHub Actions
* **Plugins:** `cypress-file-upload` (para testes de upload de imagem)

---

## 🧪 Cobertura de Testes

### 1. Testes E2E (Frontend)
Os cenários simulam a jornada completa do usuário no site.

| Feature | Descrição | Arquivo |
| :--- | :--- | :--- |
| **Cadastro** | Fluxo completo de registro e validação de usuários duplicados. | [cadastro.feature](cypress/e2e/features/cadastro.feature) |
| **Login** | Autenticação válida, inválida e Logout. | [login.feature](cypress/e2e/features/login.feature) |
| **Carrinho** | Adição de produtos, validação de quantidade e total. | [carrinho.feature](cypress/e2e/features/carrinho.feature) |
| **Produtos** | Pesquisa e validação de detalhes na PDP (Product Detail Page). | [verificarProdutos.feature](cypress/e2e/features/verificarProdutos.feature) |
| **Contato** | Envio de formulário com upload de arquivo (imagem). | [formularioContato.feature](cypress/e2e/features/formularioContato.feature) |

### 2. Testes de API (Backend)
Testes rápidos de integração e contrato, com suporte a troca de ambiente (Mock vs Real).

* **Auth:** `POST /createAccount`, `DELETE /deleteAccount`, `PUT /updateAccount`.
* **Login:** Validação de `POST /verifyLogin` com diferentes payloads.
* **Produtos & Brands:** Validação de métodos HTTP não permitidos (405) e listas de retorno.

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos
* Node.js instalado.

### Instalação
```bash
npm install
