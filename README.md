# 📚 GitHub Wiki — Desafio DIO

Projeto prático da **Formação React Developer (DIO)**: uma "wiki" para buscar e colecionar repositórios do GitHub, feita com **React, styled-components e Axios** consumindo a **API pública do GitHub**.

Baseado no repositório do expert [digitalinnovationone/trilha-react-desafio-2](https://github.com/digitalinnovationone/trilha-react-desafio-2) e evoluído com a proposta de desafio da aula e outras melhorias.

## ✅ O que foi feito em aula
- Estrutura com Create React App
- Componentes `Input`, `Button` e `ItemRepo`
- Serviço `api` com Axios apontando para `api.github.com`
- Busca de repositório por `usuario/repositorio` e listagem

## 🎯 Proposta de desafio — Remover repositório
Implementada com `filter`, sem mutar o estado:

```js
export const removeRepo = (repos, id) => repos.filter((repo) => repo.id !== id);
```

## 🚀 Melhorias que eu adicionei
| Funcionalidade | Descrição |
|---|---|
| 🔗 Busca flexível | Aceita `owner/repo` ou a URL completa (`https://github.com/owner/repo`) |
| ⌨️ Enter para buscar | Busca virou um `<form>` |
| ⏳ Loading | Botão mostra "Buscando..." e fica desabilitado durante a requisição |
| ⚠️ Tratamento de erros | Mensagens na tela para 404, limite da API (403) e falha de conexão; antes um 404 quebrava a aplicação |
| 🔁 Duplicados | Avisa quando o repositório já está na lista |
| 💾 Persistência | A lista fica salva no `localStorage` (hook `useLocalStorage`) |
| 🧾 Card completo | Avatar do dono, descrição, linguagem, estrelas, forks e issues |
| 🧹 Limpar tudo | Remove todos os repositórios de uma vez |
| 📱 Responsivo | Layout adaptado para celular |
| 🧪 Testes | 12 testes unitários (Jest) |

## 🐛 Bugs do código original corrigidos
- Clicar em **qualquer parte do card** removia o item → agora só o botão **Remover**
- Imagem `assets/github.png` importada mas inexistente → o projeto não compilava
- Faltava `key` no `.map()` da lista
- Repositório duplicado mostrava "Repositório não encontrado"

## 🧱 Estrutura
```
src/
├── pages/App.js            # Tela principal
├── components/
│   ├── Input/  Button/  ItemRepo/
├── hooks/useLocalStorage.js
├── services/api.js         # Axios + API do GitHub
└── utils/
    ├── repo.js             # parse, add, remove (filter), erros
    └── repo.test.js
```

## ▶️ Como rodar
```bash
npm install
npm start      # http://localhost:3000
npm test
npm run build
```

## 🛠️ Tecnologias
React 18 · styled-components · Axios · API REST do GitHub · Jest
