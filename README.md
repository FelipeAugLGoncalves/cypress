# Testes Automatizados com Cypress

Este repositório contém testes automatizados end-to-end utilizando [Cypress](https://www.cypress.io/) para os fluxos de cadastro no portal **Núcleo Gov**.

## 🧪 Testes Implementados

- **SIC** (`sic.spec.js`): Testa o fluxo completo de envio de solicitação via Sistema de Informação ao Cidadão.
- **Ouvidoria** (`ouvidoria.spec.js`): Testa o envio de uma manifestação via sistema de Ouvidoria.

## 🚀 Tecnologias

- Cypress v12+
- Node.js v16 ou superior

## ▶️ Como rodar os testes

1. Instale as dependências:
   ```
   bash
   npm install

2. Execute o Cypress em modo interativo:
   ```
   bash
   npm run cypress:open

3. Ou execute em modo headless (terminal):
   ```
   bash
   npm test

📋 Notas importantes
Os testes utilizam o ambiente https://beta.nucleogov.com.br. Verifique se o site está disponível antes de executar.

cy.wait(ms) foi usado por conta de lentidão em carregamentos dinâmicos. Idealmente, substitua por cy.intercept() e esperas por requisição.

Validações condicionais garantem que campos obrigatórios sejam preenchidos apenas quando necessário.

🧠 Técnicas utilizadas
Seletores baseados em texto (cy.contains)

Validação de atributos (should('have.attr', ...))

Condicionais (.then() + if) para campos preenchidos

Estrutura modular com dois arquivos de teste separados

📁 Estrutura de pastas
```
bash
Copiar
Editar
/cypress
  /e2e
    ├── sic.spec.js
    └── ouvidoria.spec.js
cypress.config.js
package.json
README.md
yaml
Copiar
Editar
```

---

### 📦 `package.json`

```json
{
  "name": "nucleogov-cypress-tests",
  "version": "1.0.0",
  "description": "Testes automatizados E2E com Cypress para os sistemas SIC e Ouvidoria da Núcleo Gov",
  "scripts": {
    "test": "cypress run",
    "cypress:open": "cypress open"
  },
  "devDependencies": {
    "cypress": "^12.17.1"
  }
}
```
📁 .gitignore
```
nginx
Copiar
Editar
node_modules
.cypress
.DS_Store
.vscode
```
⚙️ cypress.config.js (básico)
Se você ainda não tem o arquivo de configuração do Cypress:
```
js
Copiar
Editar
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://beta.nucleogov.com.br',
    supportFile: false,
  },
});
```
